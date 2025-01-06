import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaPhone, FaTimes, FaCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";

const Assistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAssistant = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
     
      <div
        onClick={toggleAssistant}
        className="animate-bounce bg-red-500 text-white rounded-full p-4 shadow-lg flex items-center justify-center cursor-pointer hover:bg-red-600 transition"
      >
        {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
      </div>

      {/* Communication Panel */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 flex flex-col items-center gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/+918275592369"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition"
            title="WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>

          {/* Email */}
          <a
            href="mailto:primespherepublication@gmail.com"
            className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition"
            title="Email"
          >
            <FaEnvelope size={24} />
          </a>

          {/* Call */}
          <a
            href="tel:+918275592369"
            className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition"
            title="Call"
          >
            <FaPhone size={24} />
          </a>
        </div>
      )}
    </div>
  );
};

export default Assistant;
