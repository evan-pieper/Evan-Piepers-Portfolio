import React, { useState } from 'react';

function Contact() {
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formValid, setFormValid] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields(prevState => {
      const newFields = { ...prevState, [name]: value };
      const allFieldsFilled = Object.values(newFields).every(field => field.trim() !== '');
      setFormValid(allFieldsFilled && !emailError);
      return newFields;
    });

    if (name === 'email') {
      validateEmail(value);
    }
  };

  const validateEmail = (email) => {
    // Regular expression to test a valid email format
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      setEmailError('Invalid email address');
      setFormValid(false);
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && formValid) {
      // Perform the submission logic here
      alert('This feature is not functional yet. Please check back later.');
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formFields.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formFields.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="phone">Callback Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formFields.phone}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formFields.message}
          onChange={handleInputChange}
          required
        />

        <button type="submit" disabled={!formValid}>Send</button>
        {emailError && <p className="error-message">{emailError}</p>}
      </form>
    </div>
  );
}

export default Contact;
