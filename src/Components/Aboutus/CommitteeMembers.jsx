import React from "react";

const CommitteeMembers = () => {
  const content = {
    heading: "Committee Members",
    description: `Our committee members are highly skilled editors and professionals with expertise across various academic disciplines. They collaborate on diverse research articles, ensuring authenticity, originality, and high-quality work. By fostering interdisciplinary research, the global E-publication committee promotes the exchange of knowledge, ideas, and findings, helping authors produce credible and impactful research.

Open communication with committee members is a cornerstone of our approach, enabling researchers to achieve exceptional results. The committee actively supports authors in selecting reference journals, refining manuscripts, and meeting indexing requirements. They also share resources, insights, and best practices worldwide through workshops, webinars, and conferences.

The structure of the committee adapts to the nature of events, with roles such as Chair, Deputy Chair, and members assigned distinct responsibilities. Their primary focus is guiding authors to create robust research articles and assisting in the journal selection process, ensuring success at every step.`,
    image: "/Aboutus/primespherecompanyai.webp", // Replace with the actual image path
  };

  return (
    <div className="w-full px-16 py-12 ">
      <div className="py-4 border-l-4 border-l-red-600 pl-3 mb-6">
        <h1 className="text-3xl font-bold text-black">{content.heading}</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <img
            src={content.image}
            alt={content.heading}
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
        <div>
          <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
            {content.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommitteeMembers;
