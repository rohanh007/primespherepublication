const DiversityInclusion = () => {
    return (
        <div className="w-full px-6 md:px-16 py-12">
            <div className="py-2 border-l-4 border-l-red-500 pl-3 mb-6">
                <h1 className="text-2xl custom:text-3xl font-bold text-black font-serif">Diversity and Inclusion</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Text Section */}
                <div className="flex-1">
                    <p className="text-base text-black leading-relaxed font-sans">
                        At Prime Sphere Publication, we are committed to fostering a culture that values diversity, equity, and inclusion in every aspect of our work. From research planning and execution to building new collaborations and partnerships, we strive to integrate unity and empower every member of our community. 
                    </p>
                    <p className="text-base text-black leading-relaxed mt-4 font-sans">
                        Our mission extends to equitable dissemination of research findings, recognition of global contributors, and the creation of a supportive environment for innovation. By embracing diverse perspectives, we address challenges from multiple viewpoints, strengthening the impact of our initiatives.
                    </p>
                    <p className="text-base text-black leading-relaxed mt-4 font-sans">
                        Prime Sphere Publication values the unique experiences and identities of every individual in our global network. This holistic approach forms the backbone of our research, innovation efforts, and international conferences, ensuring inclusivity and accessibility at every step.
                    </p>
                </div>
                {/* Image Section */}
                <div className="flex-1">
                    <img
                        src="/primespherepublication/Aboutus/d&i.webp"
                        alt="Diversity and Inclusion"
                        className="w-full h-auto rounded-lg shadow-lg"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default DiversityInclusion;
