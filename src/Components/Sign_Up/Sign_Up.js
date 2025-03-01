import React, { useState } from 'react';
import "./Sign_Up.css";

function Sign_Up() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    const phoneRegex = /^[0-9]{10}$/;  // Simple phone number validation (10 digits)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Basic email validation

    // Check Name
    if (!formData.name) formErrors.name = "Name is required";
    
    // Check Phone
    if (!formData.phone) formErrors.phone = "Phone is required";
    else if (!phoneRegex.test(formData.phone)) formErrors.phone = "Invalid phone number";

    // Check Email
    if (!formData.email) formErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) formErrors.email = "Invalid email format";
    
    // Check Password
    if (!formData.password) formErrors.password = "Password is required";
    else if (formData.password.length < 6) formErrors.password = "Password must be at least 6 characters";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;  // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully!");
      // Proceed with form submission logic (e.g., API call)
    }
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <div className="signup-grid">
        <div className="signup-text">
          <h1>Sign Up</h1>
        </div>
        <div className="signup-text1" style={{ textAlign: 'left' }}>
          Already a member? <span><a href="../Login/Login.html" style={{ color: '#2190FF' }}> Login</a></span>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="form-control"
                placeholder="Enter your name"
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="form-control"
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="form-control"
                placeholder="Enter your email"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="form-control"
                placeholder="Enter your password"
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
              <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sign_Up;
