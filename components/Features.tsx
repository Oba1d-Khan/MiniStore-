import Image from "next/image";

const Features = () => {
    return (
        <>
            <section className=" grid gap-10  mx-auto p-10 md:grid md:grid-cols-2  md:px-10  lg:max-w-[85vw]  xl:flex">

                <div className="flex gap-2 ">
                    <div className="">
                        <Image
                            src="/icons/cart-feature.png"
                            width={25}
                            height={25}
                            alt="cart-icon"
                        />
                    </div>
                    <div >
                        <h1 className="uppercase text-[#272727] text-md">Free Delivery</h1>
                        <p className="text-[#3A3A3A] text-sm ">
                            Consectetur adipi elit lorem ipsum dolor sit amet.h
                        </p>
                    </div>

                </div>
                <div className="flex gap-2">
                    <div>
                        <Image
                            src="/icons/award-feature.png"
                            width={25}
                            height={25}
                            alt="cart-icon"
                        />
                    </div>
                    <div>
                        <h1 className="uppercase text-[#272727] text-md">
                            Quality Guarantee
                        </h1>
                        <p className="text-[#3A3A3A] text-sm">
                            Dolor sit amet orem ipsu mcons ectetur adipi elit.{" "}
                        </p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div>
                        <Image
                            src="/icons/tags-feature.png"
                            width={25}
                            height={25}
                            alt="cart-icon"
                        />
                    </div>
                    <div>
                        <h1 className="uppercase text-[#272727] text-md">Daily Offers</h1>
                        <p className="text-[#3A3A3A] text-sm">
                            Amet consectetur adipi elit loreme ipsum dolor sit.{" "}
                        </p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div>
                        <Image
                            src="/icons/shield-check-feature.png"
                            width={25}
                            height={25}
                            alt="cart-icon"
                        />
                    </div>
                    <div>
                        <h1 className="uppercase text-[#272727] text-md">
                            100% secure payment
                        </h1>
                        <p className="text-[#3A3A3A] text-sm">
                            Rem Lopsum dolor sit amet, consectetur adipi elit.
                        </p>
                    </div>
                </div>
            </section>

        </>
    );
};
export default Features;
