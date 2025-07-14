'use client'

import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-react'

export default function Contact() {
    return (
        <section id="contact" className="relative w-full min-h-[600px]">
            <div className="grid grid-cols-10 w-full">
                <div className="col-span-7 bg-[#FAFAFA] py-20">
                    <div className="max-w-screen-xl mx-auto px-8 lg:px-20">
                        <div className="ml-10 lg:ml-70">
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#2AD882] mb-4">
                                Contact Us
                            </h2>
                            <p className="text-gray-600 max-w-xl mb-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et
                            </p>
                        </div>

                        <form className="flex flex-col gap-6 max-w-xl ml-10 lg:ml-70">
                            <div>
                                <label className="block text-sm mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-1"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-1"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Message</label>
                                <textarea
                                    className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-1"
                                    rows={3}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#2AD882] text-white px-6 py-3 mt-4 rounded-full font-semibold shadow hover:shadow-lg transition"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>

                <div className="col-span-3 bg-[#2AD882]"></div>
            </div>

            {/* Card Info */}
            <div className="absolute top-12 right-8 lg:right-90 w-full max-w-md bg-white rounded-xl shadow-lg p-6 z-10">
                <h3 className="text-xl font-bold text-[#2AD882] mb-6">Information</h3>
                <div className="flex flex-col space-y-6 text-gray-600">
                    <div className="flex items-center gap-4">
                        <IconMail size={24} />
                        <span>email@example.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <IconPhone size={24} />
                        <span>+62 812 3456 7890</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <IconMapPin size={24} />
                        <span>Bandung, Indonesia</span>
                    </div>
                </div>
            </div>

            <div className="bg-[#2AD882] py-8 mt-0">
                <div className="max-w-screen-xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white text-lg font-semibold">
                        Download Aplikasi Giziku untuk iOS & Android
                    </p>
                    <div className="flex items-center gap-4">
                        <img src="img/apple.png" alt="App Store" className="h-12" />
                        <img src="img/google.png" alt="Google Play" className="h-12" />
                    </div>
                </div>
            </div>
        </section>
    )
}
