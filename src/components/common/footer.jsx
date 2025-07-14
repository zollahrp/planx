import Image from 'next/image'
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
} from '@tabler/icons-react'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Langkah', href: '#steps' },
  { name: 'Fitur', href: '#features' },
  { name: 'Tampilan', href: '#showcase' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Tim', href: '#team' },
  { name: 'Kontak', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] pt-16">
      <div className="w-[90%] lg:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-600">
        <div>
          <Image
            src="/img/logo.png"
            alt="Giziku Logo"
            width={120}
            height={40}
            className="mb-4"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
        </div>

        <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-[#2AD882] font-semibold">
          {navigation.map((item, index) => (
            <a key={index} href={item.href} className="hover:underline">
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      <div className="w-[90%] lg:w-[70%] mx-auto pb-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>© 2025 Digdaya. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0 text-black">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <IconBrandFacebook size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <IconBrandLinkedin size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <IconBrandGithub size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <IconBrandInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
