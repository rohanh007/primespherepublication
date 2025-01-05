const Servicecard=({data})=>{
    console.log(data);
    const {
        serviceIcon,
        serviceTitle,
        serviceDescription,
        additionalInfo
    }= data
    return(
            <div className="max-w-full lg:h-[60vh] flex flex-col gap-3 px-6 lg:px-4 py-6 rounded-br-[60px] bg-gray-100">
                <div className="max-w-[80px] h-[80px] bg-red-300 flex justify-center items-center rounded-xl"><img alt={serviceTitle} src={serviceIcon} className="max-w-[70px] max-h-[50px]"/></div>
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-xl custom:text-2xl font-serif  tracking-wide">{serviceTitle}</h1>
                    <p className="text-wrap py-1 font-sans">{serviceDescription}</p>
                    <ul className="list-disc pl-5">
                        {
                        additionalInfo.features.map((feature,index)=>(
                             <li key={index} className="font-sans">{feature}</li>
                        ))
                      }
                    </ul>
                </div>
            </div>
    )
}
export default Servicecard;