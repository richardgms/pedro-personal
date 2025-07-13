'use client'

import Image from 'next/image'
import { Star, ArrowRight, Award, Trophy, Target } from 'lucide-react'
import { useRef } from 'react'
import { generateWhatsAppUrl } from '@/config/personal-trainer'

export default function ResultsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="resultados" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-black/95 to-black/90 relative overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Colored glows */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-primary-700/50 to-primary-500/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-primary-600/50 to-primary-400/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
            TRANSFORMAÇÕES
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-primary-700 bg-clip-text text-transparent">REAIS</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Resultados reais de alunos que mudaram suas vidas. Veja o que a dedicação e metodologia conseguem fazer.
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3 pt-2"
        >
          {[
            { 
              name: 'João Silva', 
              result: '–22 kg em 6 meses', 
              badge: 'TOP', 
              color: 'primary-400', 
              img: '/prova-social/joaosilva.png', 
              depo: 'O treino com o Pedro foi adaptado ao meu dia corrido. Hoje estou magro, me sinto forte e não tenho mais dores. Recomendo muito!',
              icon: Trophy
            },
            { 
              name: 'Maria Santos', 
              result: '–14 kg em 4 meses', 
              badge: 'PRO', 
              color: 'primary-600', 
              img: '/prova-social/mariasantos.png', 
              depo: 'Nunca achei que emagrecer fosse possível nessa idade. O Pedro me ensinou a treinar em casa mesmo, de forma simples e segura. Mudou minha vida!',
              icon: Star
            },
            { 
              name: 'Ana Oliveira', 
              result: '–12 kg em 3 meses', 
              badge: 'EXPERT', 
              color: 'primary-400', 
              img: '/prova-social/anaoliveira.png', 
              depo: 'O acompanhamento do Pedro fez toda a diferença. Ele sempre esteve presente, dando orientações práticas. Finalmente estou feliz com meu corpo!',
              icon: Award
            }
          ].map((testimonial, index) => (
            <div
              key={index}
              className="group h-full flex transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`bg-black/60 backdrop-blur-md border border-${testimonial.color}/30 rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-${testimonial.color}/25 transition-all duration-500 flex flex-col h-full w-full`}>
                <div className="relative overflow-hidden aspect-square sm:h-72 lg:h-80">
                  <Image
                    src={testimonial.img}
                    alt={`Foto de ${testimonial.name}`}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    sizes="(min-width: 1024px) 350px, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-${testimonial.color} to-${testimonial.color === 'primary-400' ? 'primary-600' : 'primary-400'} backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold shadow-md inline-flex items-center gap-1`}>
                    <testimonial.icon className="w-3 h-3" />
                    {testimonial.badge}
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-1">
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-white tracking-wide">{testimonial.name}</h3>
                  <p className={`text-${testimonial.color} font-bold text-base sm:text-lg mb-3`}>{testimonial.result}</p>
                  <div className="flex text-primary-400 text-base sm:text-lg mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    ))}
                  </div>
                  <p className={`text-gray-300 text-sm sm:text-sm leading-relaxed italic flex-1`}>
                    "{testimonial.depo}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-14 lg:mt-16">
          <a
            href={generateWhatsAppUrl('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center bg-black/40 border border-primary-400/30 hover:border-primary-400/70 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-400/20 backdrop-blur-sm gap-2"
          >
            <Target className="w-5 h-5" />
            Ver Mais Resultados
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
} 