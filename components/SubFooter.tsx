import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SubFooter = () => {
    return (
        <footer>
            <div className=" py-2 mt-3 border-t border-gray-200 dark:border-gray-300">

                <div className="grid grid-cols-2 gap-y-3 md:gap-0  md:grid-cols-3 items-center justify-between  w-full max-w-[85vw] py-1 mx-auto ">
                    <div className="space-x-4  flex items-center justify-start">
                        <p className="text-xs text-[#3A3A3A]">We ship with:</p>
                        <Link
                            className="inline-block text-gray-500 hover:text-[#72AEC8] dark:hover:text-[#72AEC8]"
                            href="#"
                        >
                            <Image src="/icons/dhl-logo.png" width={42} height={40} alt="dhl-logo" />

                        </Link>
                        <Link
                            className="inline-block text-gray-500 hover:text-[#72AEC8] dark:hover:text-[#72AEC8]"
                            href="#"
                        >
                            <Image src="/icons/shipping-logo.png" width={26} height={30} alt="shipping-logo" />

                        </Link>
                    </div>

                    <div className="space-x-4 flex items-center justify-end md:justify-start text-end md:text-start">
                        <p className="text-xs  text-[#3A3A3A]">Payment options:</p>
                        <Link
                            className="inline-block text-gray-500 hover:text-[#72AEC8] dark:hover:text-[#72AEC8]"
                            href="#"
                        >
                            <Image src="/icons/visa-logo.png" width={22} height={24} alt="visa-logo" />

                        </Link>
                        <Link
                            className="inline-block text-gray-500 hover:text-[#72AEC8] dark:hover:text-[#72AEC8]"
                            href="#"
                        >
                            <Image src="/icons/mastercard-logo.png" width={22} height={24} alt="mastercard-logo" />

                        </Link>
                        <Link
                            className="inline-block text-gray-500 hover:text-[#72AEC8] dark:hover:text-[#72AEC8]"
                            href="#"
                        >
                            <Image src="/icons/paypal-logo.png" width={22} height={24} alt="paypal-logo" />

                        </Link>
                    </div>

                    <p className="md:text-end  text-xs  text-[#3A3A3A] ">
                        © Copyright 2023 MiniStore.
                    </p>
                </div>
            </div></footer>
    )
}

export default SubFooter