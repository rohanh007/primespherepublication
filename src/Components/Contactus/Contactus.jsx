import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const ContactUs = () => {
   const [formData, setFromData]=useState({
     name:'',
     email:'',
     contact:'',
     message:''
   })

   const handleChange=(e)=>{
    setFromData({...formData, [e.target.name]:e.target.value});
   };

  const handleEmailClick = () => {
    window.location.href = "mailto:primespherepublication@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+919766986484";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
        },
        (error) => {
          console.log('Failed to send email:', error);
        }
      );
  };

  return (
    <div className=" h-[94vh] bg-contact relative top-10 ">
      <div className="bg-red-500 bg-opacity-75 flex flex-col md:flex-row justify-center h-[94vh]">
        {/* Left Side: Contact Form */}
        <div className="w-full md:w-[40%] bg-white my-16  flex items-center justify-center  p-6 md:p-10">
          <form className="w-full p-6">
            <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>

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
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Company Details */}
        <div className="w-full md:w-[50%] flex flex-col items-center justify-center gap-3 px-12 md:p-10 text-black">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Prime Sphere</h2>
            <p className="text-gray-100">
              We are here to help you with any questions or concerns. Reach out to us!
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaPhone className="text-xl" />
              <Link to="#" onClick={handlePhoneClick} className="text-white hover:underline text-black">
                +91 9766986484
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-xl" />
              <Link to="#" onClick={handleEmailClick} className="text-white hover:underline text-black">
                primesphere@company.com
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
