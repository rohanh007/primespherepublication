const CallForPaper=()=>{
    const content = {
        heading: "Call for Paper",
        description: `At PrimeSphere, we have a straightforward approach when selecting authors, welcoming a diverse group of individuals such as Ph.D. candidates, medical experts, engineers, lecturers, professors, scientists, and more. We are proud to assist them in finding the right journal for their research article. Our goal is to help authors publish their research in top journals using effective methods and techniques, ensuring a smooth publication process.
    
        Our process is clear, thorough, and user-friendly, designed to make it easy for authors to navigate. Our editorial team and experienced peer-review panel carefully assess the articles submitted by authors. Any discrepancies or formatting issues are promptly corrected to meet the standards of the chosen journal. We provide tailored guidance and support from the initial submission to final publication.
        
        We take pride in making the publication process as organized and professional as possible, so authors do not need to worry about journal selection, editing, or formatting. PrimeSphere ensures every step is seamless and efficient. Additionally, we offer online webinars for clients to attend, providing further support. If authors are ready to share their ideas with us, we can help expedite the publication of their research paper in various indexed journals. We are committed to working diligently to ensure the success of every article submitted to our platform.`,
        image: "/images/call-for-paper.jpg", // Replace with actual image URL
      };
    
      return (
        <div className="w-full px-8 md:px-16 py-12 pt-32">
          <div className="py-4 border-l-8 border-l-red-400 pl-3 mb-6">
            <h1 className="text-xl md:text-3xl font-bold text-black">{content.heading}</h1>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* <div className="flex-shrink-0">
              <img
                src={content.image}
                alt={content.heading}
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div> */}
            <div>
              <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                {content.description}
              </p>
            </div>
          </div>
        </div>
      );
}

export default CallForPaper;