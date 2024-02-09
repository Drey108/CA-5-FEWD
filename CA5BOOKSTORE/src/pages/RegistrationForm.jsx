import React, { useState } from "react";
import "./RegistrationForm.css";

export default function RegForm() {
  const [field, setField] = useState({
    fullName: "",
    email: "",
    password: "",
    reEnterPassword: ""
  });
  const [submitted, setSubmit] = useState(false);
  const [validFields, setValidFields] = useState({
    fullName: false,
    email: false,
    password: false,
    reEnterPassword: false
  });

  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
        return value.length >= 3 && value.length <= 30;
      case "email":
        return value.includes("@");
      case "password":
        return value.length >= 10 && /[!@#$%^&*(),.?":{}|<>]/.test(value);
      case "reEnterPassword":
        return value === field.password;
      default:
        return false;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value });
    setValidFields({ ...validFields, [name]: validateField(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.values(validFields).every((field) => field);
    if (isValid) {
      setSubmit(true);
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted ? (
          <div className="success-message">Registration Successful</div>
        ) : null}

        <input
          id="full-name"
          className="form-field"
          type="text"
          placeholder="Full name"
          name="fullName"
          value={field.fullName}
          onChange={handleInputChange}
        />
        {!validFields.fullName && field.fullName && (
          <span>Name should be between 3 to 30 characters</span>
        )}

        <input
          id="email"
          className="form-field"
          type="email"
          placeholder="E-mail"
          name="email"
          value={field.email}
          onChange={handleInputChange}
        />
        {!validFields.email && field.email && <span>Please enter a valid email</span>}

        <input
          id="password"
          className="form-field"
          type="password"
          placeholder="Password"
          name="password"
          value={field.password}
          onChange={handleInputChange}
        />
        {!validFields.password && field.password && (
          <span>Password must be at least 10 characters long with a special character</span>
        )}

        <input
          id="re-enter-password"
          className="form-field"
          type="password"
          placeholder="Re-enter password"
          name="reEnterPassword"
          value={field.reEnterPassword}
          onChange={handleInputChange}
        />
        {!validFields.reEnterPassword && field.reEnterPassword && (
          <span>Passwords do not match</span>
        )}

        <button
          id="registerBtn"
          className="form-field"
          type="submit"
          disabled={!Object.values(validFields).every((field) => field)}
        >
          Sign-up
        </button>
      </form>
    </div>
  );
}
