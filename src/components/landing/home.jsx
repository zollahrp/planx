'use client'

import Image from 'next/image'
import Button from '@/components/common/button'
import Wave from 'react-wavify'

export default function Home() {
  return (
    <section
      id="home"
      className="bg-[#2AD882] text-white relative overflow-hidden h-screen"
    >
      {/* Konten utama */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="max-w-screen-xl mx-auto px-8 lg:px-20 grid grid-cols-1 md:grid-cols-5 items-center gap-12 w-full">
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
      </div>

      {/* Wave di bagian bawah, mentok & sedikit naik biar nutup hijau */}
      <div className="absolute -bottom-[10px] left-0 w-full">
        <Wave
          fill="#FFFFFF"
          paused={false}
          options={{
            height: 80,
            amplitude: 60,
            speed: 0.2,
            points: 5,
          }}
          className="w-full h-[200px]"
        />
      </div>
    </section>
  )
}
