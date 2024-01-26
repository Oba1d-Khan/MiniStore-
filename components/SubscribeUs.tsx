
const SubscribeUs = () => {
    return (
        <>
            <div className="md:max-w-[85vw] mx-auto bg-[#272727] text-[#FFFFFF] tracking-wide grid grid-rows-2  md:gap-3 pt-12  md:grid-cols-2 md:grid-rows-none md:items-center md:px-10 md:py-8 lg:px-20 lg:py-12">

                <div className="font-light text-center md:text-start">
                    <h1 className="text-2xl mb-4  md:text-xl md:mb-1 lg:text-2xl lg:mb-2  ">Subscribe Us Now</h1>
                    <p className=" md:text-xs lg:text-md ">Get latest news, updates and deals directly mailed to your inbox.</p>
                </div>

                <div className="flex items-center justify-center md:justify-end">
                    <input type="text"
                        placeholder="Your email address here"
                        className="w-[62vw] px-6 py-1.5 text-xs md:w-[22vw] md:px-3 md:py-1.5 md:text-xs lg:max-w-[20vw] lg:px-6 lg:py-2.5 lg:text-sm " />
                    <button
                        className="bg-[#72AEC8] text-white uppercase text-xs px-3 py-1.5 md:text-xs md:py-1.5 md:px-2  lg:px-4 lg:py-3 lg:text-xs"
                    >Subscribe
                    </button >
                </div>

            </div>
        </>
    )
}

export default SubscribeUs