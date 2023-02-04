import React from "react";
// import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_aoqk99s",
      "template_l9hcszp",
      form.current,
      "w62wWghWyETUW2IOn"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container">
        <div className="grid grid-cols-2 gap-10">
          <article className="contact__option col-span-1">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>vimalrijal0au@gmail.com </h5>
            <a
              href={`mailto:vimalrijal0au@gmail.com`}
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option col-span-1">
            <ImTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>vimal rijal</h5>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        {/* <form ref={form} onSubmit={sendEmail}>
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
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
