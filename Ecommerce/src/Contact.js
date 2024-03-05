import React, { useState } from 'react';
import { database } from './firebaseConfig'; // Adjust the path as necessary

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await database.ref('contacts').push(formData);
      setFormData({ name: '', email: '', phoneNumber: '' }); // Reset form
      alert('Your contact information has been submitted.');
    } catch (error) {
      alert('Error submitting form: ' + error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
