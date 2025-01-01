import React from "react";

const ScopesAndOpportunities = () => {
  const content = [
    {
      heading: "",
      description: `PrimeSphere Publication is a global platform fostering debate, research dissemination, education, and innovation across diverse scholarly fields. It promotes excellence in research, education, and technological advancement to build sustainable societies. Through open-access publications, it enhances the accessibility of scientific research, encouraging global collaboration among researchers and the exchange of ideas.`,
      image: "/images/about-primesphere.jpg", // Replace with your image path
    },
    {
      heading: "Benefits for Authors",
      description: `PrimeSphere offers affordable publishing services, a vast professional network, and access to thought leadership in fields like science, engineering, medicine, business, and law. Authors benefit from:
      
      - Streamlined article submission and dissemination.
      - Research funding opportunities.
      - Networking with peers and industry leaders.
      - Simplified publication processes with a global audience reach.`,
      image: "/images/benefits-authors.jpg", // Replace with your image path
    },
    {
      heading: "Institutional Benefits",
      description: `PrimeSphere supports institutions by:
      
      - Connecting them with a skilled network of researchers and practitioners.
      - Enabling faster dissemination of findings and increased accessibility.
      - Facilitating collaborations and higher citation rates.
      - Promoting policy development and technological innovation.`,
      image: "/images/institutional-benefits.jpg", // Replace with your image path
    },
    {
      heading: "Research Assistance & Guidance",
      description: `PrimeSphere provides end-to-end consulting for academic articles, helping authors identify suitable journals and navigate the submission process. Key features include:
      
      - Publishing in high-impact, indexed journals (SCOPUS, Web of Science, PubMed, etc.).
      - Expedited processing (1-3 weeks) with personalized support.
      - Assistance with revisions to improve acceptance rates.
      - Access to high-quality peer-reviewed journals and tailored guidance.
      
      PrimeSphere ensures efficient publication while maintaining the highest quality standards, empowering researchers to focus on advancing knowledge in their fields.`,
      image: "/images/research-guidance.jpg", // Replace with your image path
    },
  ];

  return (
    <div className="w-full px-16 py-12 bg-gray-50">
      <div className="py-4 border-l-4 border-l-red-600 pl-3 mb-6">
        <h1 className="text-3xl font-bold text-black">Scopes & Opportunities</h1>
      </div>
      <div className="flex flex-col gap-10">
        {content.map((section, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            {/* <div className="flex-shrink-0">
              <img
                src={section.image}
                alt={section.heading}
                className="w-full max-w-xs md:max-w-sm rounded-md shadow-md"
              />
            </div> */}
            <div>
              <h2 className="text-2xl font-semibold text-red-600 mb-2">
                {section.heading}
              </h2>
              <p className="text-base text-gray-700 whitespace-pre-line leading-relaxed">
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScopesAndOpportunities;
