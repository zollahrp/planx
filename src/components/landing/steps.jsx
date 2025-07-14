'use client'

import { IconClipboardText, IconCalendarTime, IconChecklist } from "@tabler/icons-react"

const steps = [
  {
    icon: <IconClipboardText size={32} className="text-[#2AD882]" />,
    title: "Atur Penghasilan",
    desc: "Masukkan penghasilan bulananmu untuk disesuaikan dengan kebutuhan gizi harian.",
  },
  {
    icon: <IconCalendarTime size={32} className="text-[#2AD882]" />,
    title: "Rencana Makan Otomatis",
    desc: "Dapatkan rencana makan mingguan berdasarkan anggaran dan kebutuhan gizimu.",
  },
  {
    icon: <IconChecklist size={32} className="text-[#2AD882]" />,
    title: "Pantau Kecukupan Gizi",
    desc: "Lihat ringkasan asupan nutrisi harian & tips makan sehat dalam satu aplikasi.",
  },
]

export default function Steps() {
  return (
    <section id="steps" className="py-20 px-8 lg:px-20 max-w-screen-xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#2AD882] mb-12">
        Langkah Mudah
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="border rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-[4rem] p-6 shadow-sm hover:shadow-md transition bg-white"
          >
            <div className="bg-[#D2F6EA] w-12 h-12 flex items-center justify-center rounded-full mb-4">
              {step.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
