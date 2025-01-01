const AboutPublications=()=>{
    return(
        <div className=" py-16 px-4 sm:px-8 pt-28 relative overflow-hidden">
         
         <div className="absolute -right-[20%] top-10 h-[60vh] max-w-2xl z-10 hidden md:flex  ">
                    <svg aria-hidden="true" width="707" height="943" viewBox="0 0 707 943" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M353.5 251.337C297.028 251.337 251.248 297.133 251.248 353.625V943H210.347V353.625C210.347 274.536 274.439 210.422 353.5 210.422C432.561 210.422 496.653 274.536 496.653 353.625V943H455.752V353.625C455.752 297.133 409.972 251.337 353.5 251.337Z" class="fill-red-100"></path>
                        <path d="M353.5 181.196C258.304 181.196 181.132 258.395 181.132 353.625V943H140.231V353.625C140.231 235.798 235.715 140.281 353.5 140.281C471.285 140.281 566.769 235.798 566.769 353.625V943H525.868V353.625C525.868 258.395 448.696 181.196 353.5 181.196Z" class="fill-red-100"></path>
                        <path d="M353.5 111.056C219.58 111.056 111.017 219.658 111.017 353.625V943H70.1157V353.625C70.1157 197.061 196.991 70.1405 353.5 70.1405C510.009 70.1405 636.884 197.061 636.884 353.625V943H595.983V353.625C595.983 219.658 487.42 111.056 353.5 111.056Z" class="fill-red-100"></path>
                        <path d="M353.5 40.9153C180.856 40.9153 40.9008 180.92 40.9008 353.625V943H0V353.625C0 158.323 158.267 0 353.5 0C548.733 0 707 158.323 707 353.625V943H666.099V353.625C666.099 180.92 526.144 40.9153 353.5 40.9153Z" class="fill-red-100"></path>
                    </svg>
                </div>
      <div className="max-w-6xl mx-auto text-center relative z-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Welcome to Prime Sphere Publication
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-10">
          Prime Sphere Publication is a leading provider of scholarly article
          publishing and consultation services. We assist researchers in getting
          their work published in top-tier journals indexed in databases like
          SCOPUS, Web of Science, PubMed, Google Scholar, and other renowned
          platforms.
        </p>
        
        <div className="w-full flex flex-row">
            <div className="w-1/2">
            <div className="flex justify-center mb-10">
          <img
            src="your-image-url-here.jpg" // Replace with your image URL
            alt="Publication Process"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
            </div>
        <div className="max-w-2xl  space-y-6 text-left w-1/2">
          <p className="text-base sm:text-lg text-gray-700">
            Our expert panel evaluates your articles meticulously, ensuring they
            align with the standards of peer-reviewed journals. We offer complete
            support in the development and submission of articles to SCI and SCIE
            journals. Our services guarantee high-quality editorial support and
            peer reviews to give your research the attention it deserves.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            With our extensive experience, we help expedite the publication
            process, ensuring your article reaches the right audience through
            journals with high impact factors. Whether you’re from arts, science,
            medicine, engineering, management, or technology, we’re here to
            support you in every step of the research publication journey.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            Our end-to-end consultation services cover everything from article
            development to final publication in top research databases. Let us
            help you get your scholarly work published in journals that matter.
          </p>
        </div>
        </div>
      </div>
    </div>
    )
}
export default AboutPublications;