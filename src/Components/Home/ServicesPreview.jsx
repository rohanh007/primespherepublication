import { Link } from "react-router-dom";
import Servicecard from "../Services/Servicecard";

const ServicesPreview = () => {
  const services = [
    {
      serviceIcon: "/Services/guidance.png",
      serviceTitle: "Research Guidance",
      serviceDescription: "We have a panel of experts who will analyze your article and compare it with those in our peer-reviewed journals to provide end-to-end research consultation services for scholarly research articles and get them published in world-renowned research database journals",
      additionalInfo: {
        features:[
          "Our Peers will  review your article",
          "Assist with your research article to publish in renowned Journals "
        ]
      }
    },
    {
      serviceIcon: "/Services/information.png",
      serviceTitle: "Research Publication",
      serviceDescription: "Green-publication offers research article publication service to our authors and allows them to publish their research in journals available in well-established databases.",
      additionalInfo: {
        features: [
          "Accurate information on the research paper",
          "High-quality & high-impact journal guaranteed",
          "Publication in the target journal"
        ]
      }
    },
    {
      serviceIcon: "/Services/speech.png",
      serviceTitle: "Conference",
      serviceDescription: "Authors are welcome to discover and register for Green Publications events, including virtual and hybrid conference proceedings, to discuss the article’s loopholes and quality-related issues.",
      additionalInfo: {
        features: [
          "Scholarly authors can discover and register for free.",
          "Queries and concerns can be addressed virtually through hybrid conference proceedings."
        ]
      }
    }
  ];
  

  return (
    <div className="w-full h-auto ">
      <div className="flex flex-col gap-9 w-full h-auto relative px-10 custom:px-20 py-14 ">
        <h1 className="text-xl font-bold text-red-500 px-5">Our Services</h1>
        <div className="w-full flex flex-col md:flex-row gap-5 md:px-5">
          <div className="w-[100%] md:w-[70%] flex flex-col gap-3">
            <div className="py-2 border-l-8 border-l-red-600 pl-4">
              <h1 className="text-xl custom:text-4xl font-bold font-serif tracking-wide">What We Provide</h1>
            </div>
            <p className="text-wrap text-sm font-sans tracking-wide">Primesphere is a trusted provider of publication and consultation services, specializing in helping scholars publish their articles in leading research database journals, including SCOPUS, Web of Science, and PubMed.</p>
          </div>
          <div className="w-full md:w-[30%] flex justify-start md:justify-end items-center md:px-2"><Link to='/services' className="border border-red-500 rounded-lg bg-red-500 text-white max-w-[150px] text-center px-2 py-1 font-semibold ">Know More</Link></div>
        </div>
        <div> 
           <div className="max-w-full flex flex-col lg:flex-row gap-10 lg:gap-5 py-8">
            {
              services.map((service,index)=>(
                <div className="w-full lg:w-[33%] ">
                   <Servicecard data={service}/>
                </div>
              ))
            }
            
           </div>
        </div>
      </div>

    </div>
  )
}

export default ServicesPreview;