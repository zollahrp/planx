'use client'

import Image from 'next/image'
import team from '@/lib/team'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'

export default function Team() {
  return (
    <section id="team" className="bg-[#FFFFFF] py-20">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-20 text-center">
        {/* Judul */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2AD882] mb-2">
          Tim Pengembang <br /> Giziku
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ,
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        </p>

        {/* Grid Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow hover:shadow-md transition flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full border-4 border-[#2AD882] overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-[#2AD882] mb-2">{member.role}</p>
              <p className="text-sm text-gray-500 mb-4">{member.desc}</p>
              <div className="flex gap-4 text-gray-400 text-sm justify-center">
                {member.socials.facebook && <a href={member.socials.facebook}><FaFacebookF /></a>}
                {member.socials.twitter && <a href={member.socials.twitter}><FaTwitter /></a>}
                {member.socials.instagram && <a href={member.socials.instagram}><FaInstagram /></a>}
                {member.socials.linkedin && <a href={member.socials.linkedin}><FaLinkedinIn /></a>}
                {member.socials.youtube && <a href={member.socials.youtube}><FaYoutube /></a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
