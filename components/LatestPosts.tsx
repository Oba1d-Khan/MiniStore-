import Image from "next/image";
import Link from "next/link";

const LatestPosts = ({ sectionTitle }: { sectionTitle: string }) => {
    return (
        <>
            <section className="p-6 ">

                <div className="flex justify-between items-center my-10">
                    <h1 className="text-lg">{sectionTitle}</h1>
                    <Link
                        href="#"
                        className="uppercase text-sm border-b-2 border-gray-300"
                    >
                        Read Blogs
                    </Link>
                </div>

                <div className="grid grid-rows-3 gap-8 md:max-w-[85vw] md:mx-auto md:grid-rows-none md:grid-cols-3 md:gap-4">

                    <Link className="flex flex-col hover:shadow-lg transition " href="#">
                        <Image
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out "
                            src="/images/post-1.png"
                            alt="product image"
                            width={240}
                            height={240}
                        />
                        <div className="p-4 ">
                            <h5 className="text-xs uppercase text-[#848484] md:text-xs">
                                Feb 22, 2023 . Gadgets
                            </h5>
                            <h1 className="text-md mt-2 uppercase md:text-sm">
                                Get some cool gadgets in 2023
                            </h1>
                        </div>
                    </Link>

                    <Link className="flex flex-col hover:shadow-lg transition" href="#">
                        <Image
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out "
                            src="/images/post-2.png"
                            alt="product image"
                            width={240}
                            height={240}
                        />
                        <div className="p-4 ">
                            <h5 className="text-xs uppercase text-[#848484] md:text-xs">
                                Feb 22, 2023 . Technology
                            </h5>
                            <h1 className="text-md mt-2 uppercase md:text-sm">
                                Technology Hack you won&apos;t get
                            </h1>
                        </div>
                    </Link>

                    <Link className="flex flex-col hover:shadow-lg transition" href="#">
                        <Image
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out "
                            src="/images/post-3.png"
                            alt="product image"
                            width={240}
                            height={240}
                        />
                        <div className="p-4 ">
                            <h5 className="text-xs uppercase text-[#848484] md:text-xs">
                                Feb 22, 2023 . Camera
                            </h5>
                            <h1 className="text-md mt-2 uppercase md:text-sm">
                                Top 10 Small Camera In The World{" "}
                            </h1>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default LatestPosts;
