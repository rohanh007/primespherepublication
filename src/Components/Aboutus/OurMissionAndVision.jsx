const OurMissionAndVision = () => {
    return (
        <div className="w-full px-6 md:px-16 py-8 md:py-12 bg-red-50 mt-4">
            {/* Title Section */}
            <div className="py-2 border-l-4 border-l-red-600 pl-3 mb-6 ">
                <h1 className="text-2xl md:text-3xl font-bold font-serif text-black">Our Mission and Vision</h1>
            </div>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12">
                {/* Mission Section */}
                <div className="flex-1 md:border-e-2 pr-5">
                    <div className="py-2 border-b-2 border-b-red-600 pl-3 mb-3 max-w-[250px] ">
                        <h2 className="text-xl md:text-2xl font-semibold text-black font-serif">Our Mission</h2>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-sans">
                        At Prime Sphere Publication, our mission is to empower researchers and scholars by providing accessible, high-quality, and inclusive publishing solutions. 
                        We aim to bridge the gap between groundbreaking research and global visibility, fostering innovation and collaboration across diverse disciplines.
                    </p>
                </div>

                {/* Vision Section */}
                <div className="flex-1 ">
                    <div className="py-2 border-b-2 border-b-red-600 pl-3 mb-3 max-w-[250px] ">
                        <h2 className="text-xl md:text-2xl font-semibold text-black font-serif">Our Vision</h2>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-sans">
                        Our vision is to establish a global ecosystem where academic and professional research can thrive, shaping a future driven by knowledge, inclusivity, and sustainability. 
                        By leveraging cutting-edge technologies and practices, we envision becoming a leading name in the academic publishing industry.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurMissionAndVision;
