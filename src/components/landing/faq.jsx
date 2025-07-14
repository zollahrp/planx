'use client'

import { useState } from 'react'
import Image from 'next/image'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import faqs from '@/lib/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-20 grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
        
        {/* Left Column */}
        <div className="md:col-span-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2AD882] mb-10">
            Fequently <br /> Asked Questions
          </h2>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-md shadow-sm hover:shadow-md transition"
              >
                {/* Pertanyaan */}
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between px-6 py-4"
                >
                  <span className="text-left text-sm sm:text-base text-gray-700">
                    {faq.question}
                  </span>
                  {openIndex === i ? (
                    <IconChevronUp size={24} className="text-[#2AD882] transition-transform" />
                  ) : (
                    <IconChevronDown size={24} className="text-[#2AD882] transition-transform" />
                  )}
                </button>

                {/* Jawaban dengan animasi smooth */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === i ? 'max-h-[300px] pt-0 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2 flex flex-col items-center text-center">
          <Image
            src="/img/faq.png"
            alt="FAQ Illustration"
            width={300}
            height={300}
            className="mb-6"
          />
          <h3 className="text-xl font-bold text-[#2AD882] mb-1">Any Question?</h3>
          <p className="text-gray-600 text-sm max-w-xs">
            You can ask anything you want to know about Giziku
          </p>
        </div>
      </div>
    </section>
  )
}
