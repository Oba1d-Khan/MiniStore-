import Image from "next/image";
import { Button } from ".";

const Sale = () => {
    return (
        <>
            <section className="mt-20 bg-[#D7DDDF] md:grid md:grid-cols-2 items-center justify-items-end">

                <div className=" md:order-1">
                    <Image src="/images/sale-img.png" width={400} height={400} alt="sale-img" />
                </div>

                <div className="flex flex-col items-center justify-center  md:items-start  gap-5 py-10 ">

                    <div className="flex items-center gap-2 ">
                        <hr className="w-6 border-[#252525]" />
                        <h3 className="uppercase text-[#272727]">10% Off</h3>
                    </div>

                    <h1 className="uppercase text-5xl font-light ">
                        New Year Sale
                    </h1>

                    <Button type="button" title="Shop Sale" variant="bg-[#272727]" />
                </div>

            </section>
        </>
    );
};

export default Sale;
