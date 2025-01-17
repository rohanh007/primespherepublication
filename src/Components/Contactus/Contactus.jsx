import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [timeoutId, setTimeoutId] = useState(null); // Track timeout ID for cleanup

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage("");

    try {
      const response = await axios.post("https://backendpsp.onrender.com/api/sendmail", formData);
      setResponseMessage("Thank you for your message. We will get back to you soon!");

      // Set timeout to clear the message
      const id = setTimeout(() => {
        setResponseMessage("");
      }, 8000);
      setTimeoutId(id);
    } catch (error) {
      console.error("Error sending message:", error);
      setResponseMessage("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Cleanup timeout when the component unmounts or a new timeout is set
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const handleEmailClick = () => {
    window.location.href = "mailto:primespherepublication@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+918275592369";
  };

  return (
    <div className="h-auto md:h-[94vh] bg-contact relative top-10">
      <div className="bg-red-500/55 flex flex-col md:flex-row justify-between h-fit md:h-[94vh] border">
        {/* Left Side: Contact Form */}
        <div className="w-full md:w-[50%] bg-white flex items-center justify-center p-2 custom:p-4">
          <form className="w-full p-12" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold font-serif text-black mb-4">Contact Us</h2>

            <div className="mb-2">
              <label htmlFor="name" className="block text-sm font-medium text-black">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-2 bg-transparent border-b-2 border-gray-300 text-black focus:outline-none focus:border-blue-400 transition duration-300"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="telephone" className="block text-sm font-medium text-black">
                Phone
              </label>
              <input
                id="telephone"
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full p-2 bg-transparent border-b-2 border-gray-300 text-black focus:outline-none focus:border-blue-400 transition duration-300"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="email" className="block text-sm font-medium text-black">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-2 bg-transparent border-b-2 border-gray-300 text-black focus:outline-none focus:border-blue-400 transition duration-300"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="message" className="block text-sm font-medium text-black">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="w-full p-2 bg-transparent border-b-2 border-gray-300 text-black focus:outline-none focus:border-blue-400 transition duration-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>

            {responseMessage && (
              <p className="mt-4 text-center text-sm pb-2 text-red-500 text-lg">{responseMessage}</p>
            )}
          </form>
        </div>

        {/* Right Side: Company Details */}
        <div className="w-full md:w-[50%] flex flex-col items-center justify-center gap-4 md:gap-6 px-12 py-8 backdrop-blur-sm rounded-lg shadow-lg">
          <div className="text-center space-y-6">
            <h2 className="text-3xl custom:text-4xl text-white font-serif font-extrabold tracking-wide">Prime Sphere</h2>
            <p className="text-gray-200 text-base custom:text-lg text-left leading-relaxed font-sans">
              At Prime Sphere, we are committed to delivering the best support and services to our clients. We offer quick responses, solutions, and expertise to ensure your satisfaction. Our team is always here to help with any questions or concerns you may have.
              <br />
              Feel free to reach out to us anytime <br/><br/>— we look forward to hearing from you!
            </p>
          </div>

          <div className="space-y-3 custom:space-y-4">
            <div className="flex items-center justify-start space-x-2 custom:space-x-4">
              <FaPhone className="text-2xl text-white" />
              <Link
                to="#"
                onClick={handlePhoneClick}
                className="text-white hover:text-gray-200 hover:underline text-base custom:text-lg font-sans"
              >
                +91 8275592369
              </Link>
            </div>
            <div className="flex items-center justify-start space-x-2 custom:space-x-4">
              <FaEnvelope className="text-2xl text-white" />
              <Link
                to="#"
                onClick={handleEmailClick}
                className="text-white hover:text-gray-200 hover:underline text-base custom:text-lg font-sans"
              >
                primespherepublication@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
