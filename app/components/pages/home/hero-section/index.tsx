'use client'

import { Button } from '@/app/components/button'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandYoutube,
  TbBrandWhatsapp,
} from 'react-icons/tb'

const MOCK_CONTACTS = [
  {
    url: 'https://github.com.br',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://github.com.br',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://youtube.com',
    icon: <TbBrandYoutube />,
  },
  {
    url: 'https://youtube.com',
    icon: <TbBrandWhatsapp />,
  },
]

export const HeroSection = () => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Kayan Denizo</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Olá, meu nome é Kayan Denizo e sou desenvolvedor front-end e
            iniciante no back-end, e sou apaixonado por tecnologia. Comecei a
            estudar programação com 11 anos de idade. Meu objetivo é criar
            interfaces de usuário bonitas e funcionais. Sou esforçado, aprendo
            rápido e estou sempre estudando e aprendendo todos os dias. Estou
            sempre aberto a novas oportunidades e desafios.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 7 }).map((_, index) => (
              <TechBadge name="Node.js" />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex:col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                  rel="noreferrer"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt="Foto de perfil do Kayan Denizo"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}
