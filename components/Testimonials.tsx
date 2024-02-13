'use client'

import Image from "next/image";

const Testimonials = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container flex items-center justify-center px-1 md:px-5 py-24 mx-auto">
                    <Image
                        src="/icons/angle-left.png"
                        width={30}
                        height={30}
                        alt="angle-left"
                    />
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                        <Image
                            src="/icons/quote.png"
                            width={60}
                            height={60}
                            alt="quote-icon" className="inline-block w-18 h-18 text-gray-400 mb-2 object-contain"

                        />
                        <p className="leading-relaxed font-light px-10 text-md md:text-lg lg:text-2xl  ">
                            “Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.”
                        </p>

                        {/* RATING  */}

                        <div className="flex items-center justify-center gap-1 mt-4 mb-2">
                            <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                <path
                                    d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                </path>
                            </svg>
                            <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                <path
                                    d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                </path>
                            </svg>
                            <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                <path
                                    d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                </path>
                            </svg>
                            <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                <path
                                    d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                </path>
                            </svg>
                            <svg className="h-4 w-4 shrink-0 fill-gray-300" viewBox="0 0 256 256">
                                <path
                                    d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                </path>
                            </svg>
                        </div>

                        <h2 className="text-gray-900 font-medium title-font tracking-wider text-xs uppercase">
                            Emma Chamberlin
                        </h2>
                    </div>

                    <Image
                        src="/icons/angle-right.png"
                        width={30}
                        height={30}
                        alt="angle-right"
                    />
                </div>
            </section>
        </>
    );
};

export default Testimonials;
