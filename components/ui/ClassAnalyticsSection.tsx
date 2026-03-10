import React from "react";
import Image from "next/image";
import { FaChartLine, FaUserGraduate, FaClock } from "react-icons/fa";
import Link from "next/link";

export const ClassAnalyticsSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-16 py-12">

        {/* Section Analytics */}
        <section className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {[
              {
                icon: (
                  <div className="p-2 rounded-full bg-[#232C64]">
                    <FaChartLine className="text-white text-xl" />
                  </div>
                ),
                text: "Suivez vos progrès avec des statistiques et rapports clairs.",
              },
              {
                icon: (
                  <div className="p-2 rounded-full bg-[#DB3234]">
                    <FaUserGraduate className="text-white text-xl" />
                  </div>
                ),
                text: "Formations ciblées selon votre profil, vers un diplôme reconnu par l&apos;État.",
              },
              {
                icon: (
                  <div className="p-2 rounded-full bg-[#FED136]">
                    <FaClock className="text-white text-xl" />
                  </div>
                ),
                text: "Apprenez à votre rythme avec des créneaux flexibles.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div aria-hidden="true">{item.icon}</div>
                  <p className="text-gray-700 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section qui somme-nous */}
        <section className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">

            <div className="md:w-1/2 relative w-full h-[320px] sm:h-[400px] md:h-[500px]">
              {/* Demi-cercle avec dégradé jaune → clair */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[350px] md:w-[400px] h-[140px] sm:h-[175px] md:h-[200px] rounded-t-full z-0 bg-gradient-to-t from-yellow-600 to-yellow-100" />

              {/* Conteneur image avec bords arrondis */}
              <div className="absolute inset-0 flex items-start justify-center overflow-hidden z-10">
                <Image
                  src="/images/hero3.png"
                  alt="Solution innovante"
                  fill
                  style={{ 
                    objectFit: "cover", 
                    objectPosition: "center 40%"  
                  }}
                  className="transition-transform duration-500 hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Losanges flottants */}
              <div className="absolute top-[25%] left-[12%] w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#DB3234] transform rotate-45 opacity-80 z-20" />
              <div className="absolute top-[28%] right-[18%] w-3 sm:w-4 h-3 sm:h-4 bg-[#232C64] transform rotate-45 opacity-70 z-20" />
              <div className="absolute bottom-[18%] left-[22%] w-3 sm:w-3.5 h-3 sm:h-3.5 bg-[#00d084] transform rotate-45 opacity-75 z-20" />
              <div className="absolute bottom-[10%] right-[12%] w-3.5 sm:w-4 h-3.5 sm:h-4 bg-[#FED136] transform rotate-45 opacity-70 z-20" />
            </div>

            <div className="md:w-1/2 text-center md:text-left space-y-6">
              <h2 className="font-title text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                Qui sommes-nous?
              </h2>

              <p className="text-gray-600 text-base leading-relaxed">
                Cefora Formation une école de formation technique et professionnelle situé à Cotonou, Agla Hlazounto. Chez nous c&apos;est :
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 pt-2">
                {[
                  {
                    color: "bg-[#DB3234]",
                    title: "Filières d&apos;avenir",
                    text: "Des filières d&apos;avenir qui ouvrent de nombreuses opportunités professionnelles.",
                  },
                  {
                    color: "bg-[#FED136]",
                    title: "Formations Qualifiantes",
                    text: "Des formations de qualité conçues pour développer vos compétences.",
                  },
                  {
                    color: "bg-green-500",
                    title: "Stages Garanties",
                    text: "Des stages pour tous nos apprenants en fin de formation afin d&apos;acquérir de l&apos;expérience.",
                  },
                  {
                    color: "bg-[#232C64]",
                    title: "Soutien Continu",
                    text: "Un accompagnement 24/7 pour rester compétitif sur le marché de l&apos;emploi.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div
                      className={`flex-shrink-0 w-8 h-8 ${item.color} transform rotate-45 flex items-center justify-center shadow-sm`}
                    >
                      <div className="w-4 h-4 bg-white transform -rotate-45" />
                    </div>
                    <div>
                      <h4 className="font-title text-lg font-semibold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600 text-xs md:text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Formations techniques */}
        <section className="bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12 lg:gap-16">

              <div className="md:w-1/2 space-y-6">
                {/* Title */}
                <h2 className="font-title text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Formations techniques et professionnelles
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  A travers ce site nous ouvrons l&apos;accès à nos formations techniques et 
                  professionnelles, afin de répondre aux exigences de ceux et celles qui 
                  nous font confiance dans la quête d&apos;une formation de 
                  qualité face aux besoins et aux exigences du marché de l&apos;emploi et de 
                  l&apos;entreprenariat.
                </p>

                <ul className="space-y-4 mt-6">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Cadre pédagogique d&apos;exception</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Frais académiques compétitifs</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Formateurs qualifiés</span>
                  </li>
                </ul>

                {/* CTA Button */}
                <Link 
                  href="/inscription" 
                  className="bg-[#DB3234] text-white px-4 py-2 rounded-full font-medium inline-block hover:bg-[#c42d2f] transition-colors duration-300"
                >
                  Voir plus +
                </Link>
              </div>

              {/* Image */}
              <div className="md:w-1/2 relative w-full h-[320px] sm:h-[400px] md:h-[500px]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[350px] md:w-[400px] h-[140px] sm:h-[175px] md:h-[200px] rounded-t-full z-0 bg-gradient-to-t from-red-600 to-red-50" />

                {/* Conteneur image avec bords arrondis */}
                <div className="absolute inset-0 flex items-start justify-center rounded-b-full overflow-hidden z-10">
                  <Image
                    src="/images/joêl.png"
                    alt="Solution innovante"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 10%" }}
                    className="transition-transform duration-500 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Losanges flottants */}
                <div className="absolute top-[10%] left-[15%] w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#FED136] transform rotate-45 opacity-80 z-20" />
                <div className="absolute top-[30%] right-[20%] w-3 sm:w-4 h-3 sm:h-4 bg-[#DB3234] transform rotate-45 opacity-70 z-20" />
                <div className="absolute bottom-[15%] left-[25%] w-3 sm:w-3.5 h-3 sm:h-3.5 bg-[#00d084] transform rotate-45 opacity-75 z-20" />
                <div className="absolute bottom-[10%] right-[10%] w-3.5 sm:w-4 h-3.5 sm:h-4 bg-[#232C64] transform rotate-45 opacity-70 z-20" />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ClassAnalyticsSection;