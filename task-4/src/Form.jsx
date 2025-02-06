import React, { useState, useRef } from "react";
import './App.css'
function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: ""
  });
  const [success,setSuccessMessage]=useState('')

  const nameRef = useRef(null);
  const emailRef = useRef(null);

  // Handle input change (controlled components)
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  // Simple email validation function
  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    let isValid = true;

    // Clear previous errors
    setErrors({
      name: "",
      email: ""
    });

    // Validate name
    if (formData.name.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name is required"
      }));
      nameRef.current.focus(); // Focus on the name input
      isValid = false;
    }

    // Validate email
    if (formData.email.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required"
      }));
      emailRef.current.focus(); // Focus on the email input
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address"
      }));
      emailRef.current.focus(); // Focus on the email input
      isValid = false;
    }

    if (isValid) {
      console.log("Form submitted with data: ", formData);
      setSuccessMessage("Form submitted successfully!");  
      document.getElementById('email').value=''

    }
  }

  return (
    <div>
      <h3>Form with Name and Email Validation</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            ref={nameRef} // Use the ref for focusing
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            ref={emailRef} // Use the ref for focusing
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
         <p style={{color:"green"}}> {success}</p>
        <button   type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
