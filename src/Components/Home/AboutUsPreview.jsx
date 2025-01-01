import { Link } from "react-router-dom";
const AboutUsPreview = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-9 w-full h-auto lg:h-[70vh] items-center  relative  px-10  custom:px-20  custom:mt-0 py-16">
            <div className="w-full lg:w-1/2  custom:px-2 flex flex-col justify-center gap-3">
                <h3 className="text-xl font-bold text-red-500 px-5">About us</h3>
                <div className="py-2 border-l-8 border-l-red-600 pl-4">
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide ">Accelerate your article Publication with Us</h1>

                    <div className="flex flex-row gap-9 w-full h-[90vh] items-center relative px-20 ">
                        <div className="w-1/2 px-2 flex flex-col justify-center gap-3">
                            <h3 className="text-xl font-bold text-red-500 px-5">About us</h3>
                            <div className="py-2 border-l-8 border-l-red-600 pl-4">
                                <h1 className="text-4xl font-bold tracking-wide ">Accelerate your article Publication with Us</h1>

                            </div>
                            <p className="text-wrap text-sm">
                                PrimeSphere Publication is a highly trusted provider of publication and consultation services, specializing in helping scholarly articles get published in prestigious research databases such as SCOPUS, Web of Science, PubMed, and Google Scholar. We streamline the publication process and enhance the quality of articles to meet the standards of high-indexing journals.
                            </p>

                            <Link to='/aboutus' className="border border-red-500 rounded-lg bg-red-500 text-white max-w-[150px] text-center py-[4px] font-semibold my-2">Know More</Link>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col items-center ">
                            <img className="custom:max-w-[450px] max-h-96 " src="/Home/aboutpreview.jpg" />

                            <Link to='/aboutus' className="border border-red-500 rounded-lg bg-red-500 text-white max-w-[150px] text-center py-[4px] font-semibold">Know More</Link>
                        </div>
                        <div className="w-1/2 flex flex-col items-center">
                            <img className="max-w-[450px] " src="/Home/aboutpreview.jpg" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsPreview;