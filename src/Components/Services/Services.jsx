// Import necessary libraries
import React from 'react';
import { FaBook, FaPenNib, FaLightbulb, FaChalkboardTeacher, FaFeatherAlt, FaHashtag, FaServer, FaFileAlt } from 'react-icons/fa';


const servicesData = [
  {
    id: 1,
    title: "Research Publication",
    description: "Get your article approved through ethics, editors, peers, and indexed in major journals such as SCOPUS, Web of Science, PubMed, and more. We provide indexing and publication services tailored to researchers.",
    icon: <FaBook />
  },
  {
    id: 2,
    title: "PhD Thesis Writing",
    description: "Struggling with your PhD thesis? Our experts assist in structuring, editing, and polishing your dissertation to ensure academic excellence.",
    icon: <FaPenNib />
  },
  {
    id: 3,
    title: "Research Guidance",
    description: "Receive professional research consultation and precise guidance for publishing in academic journals. We also offer proofreading and editorial support.",
    icon: <FaLightbulb />
  },
  {
    id: 4,
    title: "Conference Proceeding",
    description: "Participate in virtual or hybrid conferences to discuss your research with our expert panel using platforms like Zoom, Microsoft Teams, and more.",
    icon: <FaChalkboardTeacher />
  },
  {
    id: 5,
    title: "Research Article Writing",
    description: "Our ghostwriting services help you craft high-quality articles for publication while maintaining confidentiality and professionalism.",
    icon: <FaFeatherAlt />
  },
  {
    id: 6,
    title: "DOI Services",
    description: "We provide DOI assignment for journal articles, ensuring permanent online identification and reliable referencing for scholarly work.",
    icon: <FaHashtag />
  },
  {
    id: 7,
    title: "OJS Services",
    description: "Manage your scientific publications efficiently with our Open Journal Systems (OJS) setup, covering everything from submission to indexing.",
    icon: <FaServer />
  },
  {
    id: 8,
    title: "Copyediting and Formatting",
    description: "Ensure your document is polished, accurate, and professional with our meticulous copyediting and formatting services.",
    icon: <FaFileAlt />
  }
];

// ServiceCard component
const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white pt-8 md:pt-0 h-[250px] md:h-auto shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <div className="flex  p-4">
        <div className="text-4xl text-red-500 mr-4">{icon}</div>
        <div>
          <h3 className="text-xl tracking-wide font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

// ServicesPage component
const ServicesPage = () => {
  const topServices = servicesData.slice(0, 3); // Top 4 services
  const otherServices = servicesData.slice(3); // Remaining services

  return (
    <div className="w-full min-h-screen relative">
      {/* Summary section */}
      <div className="flex flex-col items-start justify-center text-center w-full h-[70vh] bg-red-400 pt-14 px-16 bg-servicehero ">
        <div className='py-2 border-l-8 border-l-red-600 pl-4 mb-2'>
        <h1 className="text-4xl font-bold text-black ">Our Services</h1>
        </div>
        <p className="text-black font-semibold max-w-[80%] text-[18px] text-left">
        Primesphere Publication offers a wide range of services, including research article publication, research guidance, conference proceedings, DOI services, Open Journal Systems (OJS), web development, digital marketing, copy editing, and formatting, among others. We are dedicated to providing professional solutions for researchers and collaborators.
        </p>
      </div>


      {/* Image section */}
      {/* <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <img src="https://via.placeholder.com/400" alt="Service Image 1" className="rounded-lg shadow-md" />
          <img src="https://via.placeholder.com/400" alt="Service Image 2" className="rounded-lg shadow-md" />
          <img src="https://via.placeholder.com/400" alt="Service Image 3" className="rounded-lg shadow-md" />
        </div>
      </div> */}

      {/* Top services section */}
      <div className="container mx-auto px-16 py-8">
        {/* <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Top Services</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mt-5 px-8 md:px-0">
          {topServices.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>

      {/* Other services section */}
      <div className="container mx-auto px-16 py-8">
        <div className='border-l-8 border-l-red-600 pl-4 py-2 mb-9'>
          <h2 className="text-3xl font-bold text-gray-800">Other Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-0">
          {otherServices.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
