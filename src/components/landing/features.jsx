'use client'

import Image from 'next/image'
import { IconCheck } from '@tabler/icons-react'

const features = [
  {
    title: 'Pantauan Gizi Real-time',
    desc: 'Lihat perkembangan asupan nutrisimu setiap hari dengan tampilan visual yang menarik.',
  },
  {
    title: 'Rekomendasi Menu Sehat',
    desc: 'Dapatkan menu harian otomatis berdasarkan anggaran dan kebutuhan gizi.',
  },
  {
    title: 'Scan struk makanan',
    desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'lorem ipsum dolor',
    desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-8 lg:px-20 max-w-screen-xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#2AD882] mb-12">
        Fitur Keren yang <br /> Membuat Giziku Berbeda!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <Image
            src="/img/fitur.png"
            alt="Fitur App"
            width={400}
            height={400}
            className="w-full max-w-md"
          />
        </div>

        <div className="space-y-6">
          {features.map((fitur, index) => (
            <div
              key={index}
              className="border rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-[4rem] p-6 shadow-sm bg-white"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#D2F6EA] w-8 h-8 flex items-center justify-center rounded-full mt-1">
                  <IconCheck size={20} className="text-[#2AD882]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{fitur.title}</h3>
                  <p className="text-sm text-gray-700">{fitur.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
