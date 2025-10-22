import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_eraysexim",
        "template_eraysexim",
        form.current,
        "DAbbCGCjQGudqVm9D"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setIsSending(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
          alert("Failed to send. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-page">
      {/* === Banner Section === */}
      <div className="contact-banner">
        <img
          src="/img/contact/Dehydrated-Gralic-and-onion.webp"
          alt="Contact Us"
        />
        <h1 className="contact-title">Contact</h1>
      </div>
      {/* === Contact Info Section === */}
      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          We’d love to hear from you! Reach out using any of the details below.
        </p>

        <div className="contact-details">
          <div className="contact-card">
            <h3>📍 Address</h3>
            <p>
              Gausiya Market, Plot 11, Survey 11/15, Village Pimpri, Old Panvel
              Road, Thane, Maharashtra, India - 400612
            </p>
          </div>

          <div className="contact-card">
            <h3>📞 Phone</h3>
            <p>+91 797 754 6831</p>
          </div>

          <div className="contact-card">
            <h3>✉️ Email</h3>
            <p>info@eraysexim.com</p>
          </div>
        </div>
      </section>
      {/* === Contact Form Section === */}
      <section className="contact-form">
        <h2>Send Us a Message</h2>
        {!isSent ? (
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        ) : (
          <p className="thank-you">Thank you! Your message has been sent ✅</p>
        )}
      </section>
    </div>
  );
};

export default Contact;
