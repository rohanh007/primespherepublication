import CorpSocialResp from "./CorpSocialResp";
import DiversityInclusion from "./DiversityInclusion";
import OurMissionAndVision from "./OurMissionAndVision";
import ScopesAndOpportunities from "./ScopesAndOpportunities";
import CommitteeMembers from "./CommitteeMembers";
const Aboutus = () => {
    return (
        <div className=" w-full ">
            <div className="flex flex-col md:flex-row items-center  md:justify-center h-auto md:h-[70vh] bg-red-50 pb-14 md:pb-0 md:pt-14 pt-28 px-6 custom:px-16 relative overflow-hidden">
                <div className="flex flex-col max-w-full md:max-w-[60%] relative z-20 ">
                    <div className='py-2 border-l-8 border-l-red-600 pl-4 mb-3'>
                        <h1 className=" text-2xl md:text-4xl font-bold text-black font-serif">About us</h1>
                    </div>
                    <p className="text-black text-base md:text-[18px] text-left flex-1 font-sans">
                        Primesphere Publication is a trusted, open-access, peer-reviewed publishing authority supporting researchers, students, and scholars worldwide since 2014. We provide services like journal selection, Crossref & DOI indexing, and publication in indexed databases such as SCOPUS, Web of Science, and Google Scholar. Our expertise spans diverse research fields, ensuring high-quality and tailored publishing solutions.
                    </p>
                </div>

                <div className="max-w-full md:max-w-[40%] relative z-20 pt-4 flex justify-center p-6">
                    <img src='/Aboutus/aboutuspage.webp' className="flex-1" />
                </div>

                <div className="absolute -right-[20%] top-10 h-[60vh] max-w-2xl z-10 hidden md:flex ">
                    <svg aria-hidden="true" width="707" height="943" viewBox="0 0 707 943" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M353.5 251.337C297.028 251.337 251.248 297.133 251.248 353.625V943H210.347V353.625C210.347 274.536 274.439 210.422 353.5 210.422C432.561 210.422 496.653 274.536 496.653 353.625V943H455.752V353.625C455.752 297.133 409.972 251.337 353.5 251.337Z" class="fill-red-100"></path>
                        <path d="M353.5 181.196C258.304 181.196 181.132 258.395 181.132 353.625V943H140.231V353.625C140.231 235.798 235.715 140.281 353.5 140.281C471.285 140.281 566.769 235.798 566.769 353.625V943H525.868V353.625C525.868 258.395 448.696 181.196 353.5 181.196Z" class="fill-red-100"></path>
                        <path d="M353.5 111.056C219.58 111.056 111.017 219.658 111.017 353.625V943H70.1157V353.625C70.1157 197.061 196.991 70.1405 353.5 70.1405C510.009 70.1405 636.884 197.061 636.884 353.625V943H595.983V353.625C595.983 219.658 487.42 111.056 353.5 111.056Z" class="fill-red-100"></path>
                        <path d="M353.5 40.9153C180.856 40.9153 40.9008 180.92 40.9008 353.625V943H0V353.625C0 158.323 158.267 0 353.5 0C548.733 0 707 158.323 707 353.625V943H666.099V353.625C666.099 180.92 526.144 40.9153 353.5 40.9153Z" class="fill-red-100"></path>
                    </svg>
                </div>
            </div>
            {/* research excellence */}
            <div className="w-full px-6 custom:px-16 py-12">
                <div className="py-2 border-l-4 border-l-red-600 pl-3 mb-3">
                    <h1 className=" text-2xl custom:text-3xl font-bold text-black font-serif">Research Excellence</h1>
                </div>
                <p className="text-wrap text-base font-sans ">
                    Prime Sphere Publication is dedicated to prioritizing authors' research articles by providing a thorough review process conducted by our expert editors and peers in the respective fields of study. As a reputable open-access, double-blind, peer-reviewed publishing authority, we ensure high acceptance rates for authors and researchers globally.
                    <br /><br />
                    We are committed to fostering inclusion, equality, accessibility, and diversity within the realm of scholarly publication. We have collaborated with prestigious research database journals like SCOPUS (Elsevier), Web of Science, UGC, Google Scholar, PubMed, ABDC, DOAJ, and SJR, among others. Our services include Crossref and DOI indexing, which enhances the visibility and impact of authors’ work, boosting journal impact factor ratios.
                    <br /><br />
                    Our publishing expertise spans a wide range of disciplines, including Engineering, Medicine, Pharmaceuticals, Psychology, Law, Business, Education, and beyond. We offer comprehensive publication options, catering to both open-access and subscription-based models, with free or paid alternatives to meet diverse needs.
                    <br /><br />
                    We take pride in guiding authors through the entire publishing journey, from selecting the most suitable indexed journal to leveraging advanced citation and reference search tools. Our clientele includes researchers, students, Ph.D. scholars, lecturers, professors, scientists, institutional heads, and corporate professionals.
                    <br /><br />
                    With a steadfast focus on credibility, client satisfaction, and rapid publication timelines, we deliver tailored research assistance and publishing solutions. At Prime Sphere Publication, we are driven by our commitment to excellence and precision, ensuring that every research article is positioned for maximum impact and reach.
                </p>

            </div>

            {/* mission and visison */}
            <OurMissionAndVision/>

            {/*diversity and inclusion*/}
            <DiversityInclusion/>

            {/* Scopes and opportunities */}
            <ScopesAndOpportunities/>

            <CommitteeMembers/>
            {/* Corporate social responsibility*/}
            <CorpSocialResp/>


        </div>
    )
}

export default Aboutus;