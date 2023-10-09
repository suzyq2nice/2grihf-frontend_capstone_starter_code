import React, { useState } from 'react';
import './Sign_Up.css';

function SignupForm() {
  // State variables for form data and errors
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
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

  // Submit handler with validation
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic name validation 
    if (!formData.name || formData.name.length < 3) {
      setErrors({
        ...errors,
        name: 'Name must be at least 3 characters long',
      });
      return;
    }

    // Basic phone validation 
    if (!formData.phone || !/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(formData.phone)) {
      setErrors({
        ...errors,
        phone: 'Please enter a valid phone number in the format XXX-XXX-XXXX',
      });
      return;
    }

    // Basic email validation 
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrors({
        ...errors,
        email: 'Please enter a valid email address',
      });
      return;
    }

    // Basic password validation 
    if (!formData.password || formData.password.length < 6) {
      setErrors({
        ...errors,
        password: 'Password must be at least 6 characters long',
      });
      return;
    }

    // If validation passes, you can proceed with form submission
    // For example, you can make an API request here to create a new user

    // Reset form data and errors after submission
    setFormData({ name: '', phone: '', email: '', password: '' });
    setErrors({ name: '', phone: '', email: '', password: '' });
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <div className="signup-grid">
        <div className="signup-text">
          <h1>Sign Up</h1>
        </div>
        <div className="signup-text1" style={{ textAlign: 'left' }}>
          Already a member?{' '}
          <span>
            <a href="../Login/Login.html" style={{ color: '#2190FF' }}>
              Login
            </a>
          </span>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="form-control"
                placeholder="Enter your name"
                aria-describedby="helpId"
                value={formData.name}
                onChange={handleChange}
              />
              <span className="error">{errors.name}</span> {/* Display name error message */}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
                className="form-control"
                placeholder="Enter your phone number"
                aria-describedby="helpId"
                value={formData.phone}
                onChange={handleChange}
              />
              <span className="error">{errors.phone}</span> {/* Display phone error message */}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
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
                required
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
                Submit
              </button>
              <button
                type="reset"
                className="btn btn-danger mb-2 waves-effect waves-light"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
