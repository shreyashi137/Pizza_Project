import { useState } from "react";
import "../Style/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // Handle input changes
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been submitted.`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-container">
      
      {/* Left Side Image */}
      <div className="contact-left">
        <img
          src="https://cdn.pixabay.com/photo/2014/05/18/11/25/pizza-346985_1280.jpg"
          alt="Pizza"
          className="contact-img"
        />
      </div>

      {/* Right Side Form */}
      <div className="contact-right">
        <h1 className="contact-title">Contact Us 🍕</h1>
        <p className="contact-text">
          Fill the form below to share your thoughts or favorite pizza dish with us!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Favorite Dish / Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
