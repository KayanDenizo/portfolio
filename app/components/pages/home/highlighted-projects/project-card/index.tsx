import { Link } from '@/app/components/link'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA"
          alt="Thumbnail do projeto WDP Shoes"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          WDP Shoes
        </h3>

        <p className="text-gray-400 my-6">
          Wdp Shoes é um website de e-commerce que foi desenvolvido durante meu
          apredizado de JavaScript. E este website foi desenvolvido com HTML5,
          CSS3, JavaScript e PHP
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w[350px]:">
          <TechBadge name="HTML5" />
          <TechBadge name="CSS3" />
          <TechBadge name="PHP" />
          <TechBadge name="JavaScript" />
          <TechBadge name="Jquery" />
          <TechBadge name="Next.js" />
        </div>

        <Link href="/projects/book-wise">
          Ver Projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
