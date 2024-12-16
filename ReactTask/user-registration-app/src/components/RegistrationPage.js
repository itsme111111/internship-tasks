import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const RegistrationPage = ({ addUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    education: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.dob && formData.gender && formData.education) {
      addUser(formData); 
      navigate("/display");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select your gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Education:</label>
        <input
          type="text"
          name="education"
          placeholder="Enter your education level"
          value={formData.education}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
