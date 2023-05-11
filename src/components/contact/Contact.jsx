import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qc7ebm7",
      "template_3qlms34",
      form.current,
      "PmoPphe5DuoAAa2KB"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>skshubroto@gmail.com</h5>
            <a href="malito:skshubroto@gmail.com" target="_blanks">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Shubrotto KH</h5>
            <a href="https://m.me/skshubrotto" target="_blanks">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiWhatsappFill className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+880-131-1479-9092</h5>
            <a
              href="https://api.whatsapp.com/send?phone+8801311479092"
              target="_blanks"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End of Contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
