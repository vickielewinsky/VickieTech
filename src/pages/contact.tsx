import React from "react";

const Contact = () => {
  return (
    <div className="contact-page max-w-4xl mx-auto px-4 py-8">
      <h1 className="contact-title text-4xl font-bold text-center mb-6">Contact Me</h1>
      <p className="contact-intro text-lg text-center mb-8">
        I would love to hear from you! Feel free to reach out for collaboration, inquiries, or just to say hello.
      </p>

      {/* Contact Information */}
      <div className="contact-info mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <ul className="contact-list space-y-3">
          <li className="contact-item text-lg">
            <strong>Phone:</strong> +254 799 692055
          </li>
          <li className="contact-item text-lg">
            <strong>Email:</strong>{" "}
            <a href="mailto:lewinskyvictoria45@gmail.com" className="contact-link text-blue-500 hover:underline">
              lewinskyvictoria45@gmail.com
            </a>
          </li>
          <li className="contact-item text-lg">
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/vickie-lewinsky-038474291"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link text-blue-500 hover:underline"
            >
              www.linkedin.com/in/vickie-lewinsky-038474291
            </a>
          </li>
          <li className="contact-item text-lg">
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/vickielewinsky/VickieTech"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link text-blue-500 hover:underline"
            >
              https://github.com/vickielewinsky/VickieTech
            </a>
          </li>
        </ul>
      </div>

      {/* Social Media */}
      <div className="social-media mb-12">
        <h2 className="text-2xl font-semibold mb-4">Social Media</h2>
        <p className="text-lg mb-4">Feel free to connect with me through my online profiles:</p>
        <ul className="contact-list space-y-3">
          <li className="contact-item text-lg">
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/vickie-lewinsky-038474291"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link text-blue-500 hover:underline"
            >
              Vickie Lewinsky
            </a>
          </li>
          <li className="contact-item text-lg">
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/vickielewinsky"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link text-blue-500 hover:underline"
            >
              VickieTech
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
        <form className="contact-form" action="#" method="POST">
          <div className="form-group mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="submit-btn w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
