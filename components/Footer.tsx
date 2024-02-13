import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full max-w-[85vw] py-12  mx-auto ">
            {/* Footer */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-7 mb-8">
                <div className="col-span-full  lg:col-span-1 lg:block">
                    <Link href="/" className="text-3xl ">
                        MiniStore<span className="text-[#72AEC8]">.</span>{" "}
                    </Link>

                    <p className="my-3 text-xs sm:text-sm  text-[#3A3A3A] ">
                        Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
                        Gravida massa volutpat aenean odio erat nullam fringilla.
                    </p>

                    {/* Social Links */}
                    <div className="space-x-4 ">
                        <Link
                            className="inline-block text-gray-500 hover:text-[#72AEC8] dark:hover:text-[#72AEC8]"
                            href="#"
                        >
                            <Image
                                src="/icons/fb-logo.png"
                                width={10}
                                height={10}
                                alt="fb-logo"
                            />
                        </Link>
                        <Link
                            className="inline-block text-gray-500 hover:text-[#72AEC8] dark:hover:text-[#72AEC8]"
                            href="#"
                        >
                            <Image
                                src="/icons/ig-logo.png"
                                width={16}
                                height={16}
                                alt="ig-logo"
                            />
                        </Link>
                        <Link
                            className="inline-block text-gray-500 hover:text-[#72AEC8] dark:hover:text-[#72AEC8]"
                            href="#"
                        >
                            <Image
                                src="/icons/twitter-logo.png"
                                width={16}
                                height={16}
                                alt="ig-logo"
                            />
                        </Link>{" "}
                        <Link
                            className="inline-block text-gray-500 hover:text-[#72AEC8] dark:hover:text-[#72AEC8]"
                            href="#"
                        >
                            <Image
                                src="/icons/linkedIn-logo.png"
                                width={16}
                                height={16}
                                alt="ig-logo"
                            />
                        </Link>{" "}
                        <Link
                            className="inline-block text-gray-500 hover:text-[#72AEC8] dark:hover:text-[#72AEC8]"
                            href="#"
                        >
                            <Image
                                src="/icons/youtube-logo.png"
                                width={16}
                                height={16}
                                alt="ig-logo"
                            />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="lg:ml-10">
                    <h4 className="text-sm font-semibold text-[#272727] uppercase ">
                        Quick Links
                    </h4>

                    <div className="mt-3 grid space-y-3 text-xs uppercase">
                        <p>
                            <a
                                className="inline-flex gap-x-2 text-[#272727] hover:text-[#72AEC8]  dark:hover:text-[#72AEC8] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                Home
                            </a>
                        </p>
                        <p>
                            <a
                                className="inline-flex gap-x-2 text-gray-900 hover:text-[#72AEC8] dark:text-black dark:hover:text-[#72AEC8] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                About
                            </a>
                        </p>
                        <p>
                            <a
                                className="inline-flex gap-x-2 text-gray-900 hover:text-[#72AEC8] dark:text-black dark:hover:text-[#72AEC8] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                Shop
                            </a>
                        </p>
                        <p>
                            <a
                                className="inline-flex gap-x-2 text-gray-900 hover:text-[#72AEC8] dark:text-black dark:hover:text-[#72AEC8] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                Blogs
                            </a>
                        </p>{" "}
                        <p>
                            <a
                                className="inline-flex gap-x-2 text-gray-900 hover:text-[#72AEC8] dark:text-black dark:hover:text-[#72AEC8] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                Contact
                            </a>
                        </p>
                    </div>
                </div>

                {/* Help & Info */}
                <div>
                    <h4 className="text-sm font-semibold text-[#272727] uppercase ">
                        Help & Info
                    </h4>

                    <div className="mt-3 grid space-y-3 text-xs uppercase">
                        <p>
                            <a
                                className="inline-flex gap-x-2 text-green-900 hover:text-[#72AEC8] dark:text-black dark:hover:text-[#72AEC8] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                Track Your Order
                            </a>
                        </p>
                        <p>
                            <a
                                className="inline-flex gap-x-2 text-gray-900 hover:text-[#72AEC8] dark:text-black dark:hover:text-[#72AEC8] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                Return Policies
                            </a>
                        </p>
                        <p>
                            <a
                                className="inline-flex gap-x-2 text-gray-900 hover:text-[#72AEC8] dark:text-black dark:hover:text-[#72AEC8] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                Shipping + Delivery
                            </a>{" "}
                        </p>
                        <p>
                            <a
                                className="inline-flex gap-x-2 text-gray-900 hover:text-[#72AEC8] dark:text-black dark:hover:text-[#72AEC8] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                Contact Us
                            </a>
                        </p>
                        <p>
                            <a
                                className="inline-flex gap-x-2 text-gray-900 hover:text-[#72AEC8] dark:text-black dark:hover:text-[#72AEC8] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                Faqs
                            </a>
                        </p>
                    </div>
                </div>

                {/* Contact Us */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-900 uppercase dark:text-black">
                        Contact Us
                    </h4>

                    <div className="mt-3 grid space-y-3 text-sm">
                        <p>
                            <Link
                                className="inline-flex flex-col gap-x-2  text-[#3A3A3A]  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >Do you have any queries or suggestions?
                                <span className="underline font-[500] text-[#272727] hover:text-[#72AEC8]">
                                    yourinfo@gmail.com
                                </span>
                            </Link>
                        </p>
                        <p>
                            <Link
                                className="inline-flex flex-col gap-x-2 text-[#3A3A3A]  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >If you need support? Just give us a call.
                                <span className="underline font-[500] text-[#272727] hover:text-[#72AEC8]">
                                    +55 111 222 333 44
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
