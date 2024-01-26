import Image from "next/image";
import Link from "next/link";

const Instagram = () => {
    return (
        <>
            <section className="p-6">
                <div className="text-center mt-14 mb-8">
                    <h1 className="text-xl uppercase">Shop Our Insta</h1>
                </div>

                <div className="md:max-w-[84vw] md:mx-auto">

                    <div className=" relative grid grid-cols-3 sm:grid-cols-5 gap-2">
                        <Image className=" w-full sm:w-40 h-40 object-cover  " src="/images/iphone-10.png" alt="Image Description" width={240} height={240} />
                        <Image className="w-full sm:w-40 h-40 object-cover" src="/images/black-watch.png" alt="Image Description" width={240} height={240} />
                        <Image className="w-full sm:w-40 h-40 object-cover" src="/images/iphone-11.png" alt="Image Description" width={240} height={240} />
                        <Image className="w-full sm:w-40 h-40 object-cover" src="/images/post-2.png" alt="Image Description" width={240} height={240} />
                        <Image className="w-full sm:w-40 h-40 object-cover" src="/images/post-3.png" alt="Image Description" width={240} height={240} />

                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:opacity-80 hover:scale-105 hover:shadow-gray-600 hover:shadow-xl flex items-center justify-center">
                            <Image src="/icons/hover-ig-logo.png" width={50} height={50} alt="ig-logo" />
                        </div>


                    </div>


                </div>

            </section>
        </>
    );
};

export default Instagram;
