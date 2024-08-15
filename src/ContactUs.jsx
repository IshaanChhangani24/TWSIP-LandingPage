import React from 'react';

const ContactUs = () => {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Form submitted!');
  };

  return (
    <section id="contact-us">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          required
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactUs;
