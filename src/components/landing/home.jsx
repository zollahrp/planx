'use client'

import Image from 'next/image'
import Button from '@/components/common/button'
import Wave from '@/components/common/wave'

export default function Home() {
  return (
    <section
      id="home"
      className="bg-[#2AD882] text-white min-h-screen pt-20 pb-0 relative overflow-hidden"
    >
      {/* Konten utama */}
      <div className="max-w-screen-xl mx-auto px-8 lg:px-20 grid grid-cols-1 md:grid-cols-5 items-center gap-12 w-full relative z-10 min-h-[calc(100vh-100px)]">
        {/* Kolom Kiri */}
        <div className="md:col-span-3 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Solusi Gizi Cerdas untuk <br /> Keluarga Indonesia
          </h1>
          <p className="text-lg text-white/90">
            Atur rencana makan mingguan sesuai penghasilan, pantau kecukupan nutrisi, dan temukan tips masak sehat semua dalam satu aplikasi.
          </p>
          <Button variant="primary">Download App</Button>
        </div>

        {/* Kolom Kanan */}
        <div className="md:col-span-2 flex justify-center md:justify-end">
          <Image
            src="/img/home.png"
            alt="Mockup App"
            width={300}
            height={300}
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>

      {/* Wave di dalam section, tapi bebas dari container */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <Wave />
      </div>
    </section>
  )
}
