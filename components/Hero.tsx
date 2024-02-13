import Image from "next/image";
import Button from "./Button";

const Hero = () => {
    return (
        <>
            <section className="bg-[#D7DDDF] flex items-center md:justify-between">
                <Image
                    src="/icons/angle-left.png"
                    width={60}
                    height={60}
                    alt="angle-left"
                />

                <div className="flex flex-col justify-between py-4 md:w-[60vw] md:flex-row-reverse md:gap-12">

                    <div>
                        <Image src="/images/hero-img.svg" width={500} height={500} alt="hero-img"
                            className=" lg:pl-12 "
                        />
                    </div>

                    <div className="flex flex-col items-center justify-between gap-6 py-10 md:justify-center  md:items-start md:gap-5 lg:gap-8  ">
                        <h1 className="font-light uppercase text-center text-5xl md:text-start md:text-4xl md:w-[25vw] lg:text-5xl ">
                            Your Products <br /> are Great.
                        </h1>
                        <Button type="button" title="Shop Product" variant="bg-[#272727]"
                        />
                    </div>

                </div>

                <Image
                    src="/icons/angle-right.png"
                    width={60}
                    height={60}
                    alt="angle-right"
                />
            </section>
        </>
    );
};

export default Hero;
