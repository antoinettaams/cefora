import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div className="bg-white">
      {/* Section Hero - Maintenant avec le même conteneur */}
      <div className="relative bg-[#232C64] pb-52 pt-20 overflow-hidden">
        {/* Quadrillage*/}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-5 z-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => {
            const isLastCol = (i + 1) % 6 === 0;
            const isLastRow = i >= 24;
            return (
              <div
                key={i}
                className={`border-r border-b border-[#202337] ${
                  isLastCol ? 'border-r-0' : ''
                } ${isLastRow ? 'border-b-0' : ''}`}
              />
            );
          })}
        </div>

        {/* Même conteneur que les autres sections */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10 h-full min-h-[40vh] flex items-center max-w-[1200px]">
          <div className="flex flex-col md:flex-row items-center h-full gap-6 lg:gap-8 w-full">
            <div className="md:w-1/2 w-full text-center md:text-left relative">
              {/* Apostrophe mobile */}
              <div
                className="md:hidden mx-auto text-white text-[80px] font-serif"
                style={{
                  lineHeight: '0.5',
                  marginTop: '-10px',
                  marginBottom: '-20px',
                }}
              >
                &ldquo;
              </div>

              <div className="ml-4 sm:ml-12 md:ml-20 lg:ml-11 xl:ml-32 relative md:mt-0 -mt-2">
                <h1 className="font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-2 sm:mb-3 md:mb-4">
                  <span className="block md:inline-block">Derrière chaque talent,</span>
                  <span className="block text-[#FED136] md:mt-1">une vision</span>
                </h1>
                <p className="text-gray-300 text-sm sm:text-base md:text-base lg:text-lg max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0">
                  Cefora Formation est une école de formation technique et
                  professionnelle située à Cotonou, Agla Hlazounto.
                </p>
              </div>
            </div>

            {/* Apostrophe desktop */}
<div className="hidden md:block md:w-1/2 relative">
  <div
    className="absolute text-white font-serif
      text-[180px] md:text-[200px] lg:text-[220px] xl:text-[240px]
      md:-right-[48px] lg:-right-[80px] xl:right-[15px] 2xl:right-[100px]"
    style={{
      width: '200px',
      height: '240px',
      top: '-15px',
      lineHeight: '0.5',
    }}
  >
    &ldquo;
  </div>
</div>
          </div>
        </div>  
      </div>

      {/* Toutes les sections suivantes dans le même conteneur principal */}
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
        
        {/* Section Cartes Images */}
        <section className="py-12 sm:py-16 -mt-50 relative z-20">
          <div className="max-w-[900px] mx-auto">
            <div className="flex flex-wrap justify-center gap-25">
              {/* Carte 1 */}
              <div className="w-[230px] h-[290px] bg-white p-6 shadow-2xl rounded-lg relative overflow-hidden group">
                <div className="absolute inset-0">
                  <Image
                    src="/images/école.jpg"
                    alt="Centre CEFORA FORMATION"
                    fill
                    className="transition-transform duration-500 group-hover:scale-105 object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-yellow-400 to-transparent opacity-70"></div>
                <div className="absolute -right-12 -top-12 w-36 h-36 bg-[#0c0c1e] opacity-10 rounded-full group-hover:opacity-20 transition"></div>
                
                {/* Titre superposé */}
                <div className="absolute bottom-6 left-0 right-0 text-center text-white z-10">
                  <h3 className="font-title font-bold text-lg">Notre Centre</h3>
                  <p className="text-sm opacity-90">Environnement moderne</p>
                </div>
              </div>

              {/* Carte 2 */}
              <div className="w-[230px] h-[290px] bg-white p-6 shadow-2xl rounded-lg relative overflow-hidden group">
                <div className="absolute inset-0">
                  <Image
                    src="/images/directeur.jpg"
                    alt="Directeur CEFORA FORMATION"
                    fill
                    className="transition-transform duration-500 group-hover:scale-105 object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-700 to-transparent opacity-70"></div>
                <div className="absolute -right-12 -top-12 w-36 h-36 bg-[#ff6200] opacity-10 rounded-full group-hover:opacity-20 transition"></div>
                
                {/* Titre superposé */}
                <div className="absolute bottom-6 left-0 right-0 text-center text-white z-10">
                  <h3 className="font-title font-bold text-lg">Notre Directeur</h3>
                  <p className="text-sm opacity-90">Leadership et expertise</p>
                </div>
              </div>

              {/* Carte 3 */}
              <div className="w-[230px] h-[290px] bg-white p-6 shadow-2xl rounded-lg relative overflow-hidden group">
                <div className="absolute inset-0">
                  <Image
                    src="/images/censeur.jpg"
                    alt="Censeur CEFORA FORMATION"
                    fill
                    className="transition-transform duration-500 group-hover:scale-105 object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-red-700 to-transparent opacity-70"></div>
                <div className="absolute -right-12 -top-12 w-36 h-36 bg-[#0c0c1e] opacity-10 rounded-full group-hover:opacity-20 transition"></div>
                
                {/* Titre superposé */}
                <div className="absolute bottom-6 left-0 right-0 text-center text-white z-10">
                  <h3 className="font-title font-bold text-lg">Notre Censeur</h3>
                  <p className="text-sm opacity-90">Encadrement pédagogique</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section À propos */}
        <section className="py-12 sm:py-16">
          <div className="max-w-[900px] mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 xl:gap-16">
              <div className="w-full lg:w-2/5 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-title font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                  <span className="text-[#FED136] font-title">À propos</span> <br /> de nous
                </h2>
                <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg">
                  Nous réinventons l&apos;apprentissage pour former des professionnels compétents et épanouis, prêts à exceller dans un monde en évolution.
                </p>

                <div className="mt-4 sm:mt-6">
                  <Link
                    href="formations"
                    className="inline-block bg-[#DB3234] hover:bg-[#e55a00] text-white font-semibold py-3 px-6 rounded-full transition duration-300"
                  >
                    Voir nos formations
                  </Link>
                </div>
              </div>

              <div className="w-full lg:w-3/5 flex flex-col gap-8 sm:gap-10 relative items-center lg:items-start">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 ml-0 sm:ml-10 md:ml-16">
                  <div className="flex flex-col items-center">
                    <div className="relative mt-5 sm:mt-8">
                      <div className="absolute top-1 -left-10 sm:-left-12 w-4 h-4 bg-blue-500 transform rotate-45 z-10"></div>
                      <div className="w-36 sm:w-40 h-52 sm:h-60 bg-gray-200 rounded-3xl overflow-hidden mb-3">
                        <Image
                          src="/images/etudiant.jpg"
                          alt="Etudian CEFORA FORMATION"
                          width={160}
                          height={240}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <span className="text-gray-700 font-medium text-base sm:text-lg">
                      Enjoy & Playful
                    </span>
                  </div>
                  <div className="pt-3 sm:pt-6 relative text-center sm:text-left">
                    <div className="absolute -top-2 sm:-top-3 left-6 sm:left-8 w-4 h-4 bg-red-500 transform rotate-45"></div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-5 pt-2 ml-0 sm:ml-3">
                      We have great <br /> <span>teachers</span>
                    </h3>
                  </div>
                </div>

                <div className="flex sm:ml-[4rem] md:ml-[6rem] lg:ml-[8rem] xl:ml-[20rem] sm:-mt-5 md:-mt-6 lg:-mt-30 relative">
                  <div className="absolute -left-10 sm:-left-12 md:-left-16 top-16 sm:top-20 md:top-24 transform -translate-y-1/2 w-4 h-4 bg-yellow-400 rotate-45 z-10"></div>
                  <div className="flex flex-col items-center">
                    <div className="w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 bg-gray-200 rounded-full overflow-hidden">
                      <Image
                        src="/images/proff.jpg"
                        alt="Formateur CEFORA FORMATION"
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-gray-700 font-medium text-base sm:text-lg mt-2">
                      Enjoy & Playful
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Atouts */}
        <section className="py-12 sm:py-16">
          <div className="max-w-[900px] mx-auto">
            {/* Titre et description alignés à gauche */}
            <div className="mb-10 text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#232C64] font-title mb-4">
                Nos Atouts
              </h2>
              <p className="text-gray-700 text-base sm:text-lg">
                Nos professeurs expérimentés et passionnés sont <br /> le cœur de Cefora Formation.
              </p>
            </div>

            {/* Cartes */}
            <div className="flex flex-wrap justify-center gap-6">
              {/* Carte 1 */}
              <div className="w-[230px] h-[290px] bg-white p-6 shadow-2xl rounded-lg relative overflow-hidden group">
                <div className="absolute inset-0">
                  <Image
                    src="/images/salle.jpg"
                    alt="Innovation"
                    fill
                    className="transition-transform duration-500 group-hover:scale-105 object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-yellow-400 to-transparent opacity-70"></div>
                <div className="absolute -right-12 -top-12 w-36 h-36 bg-[#0c0c1e] opacity-10 rounded-full group-hover:opacity-20 transition"></div>
              </div>

              {/* Carte 2 */}
              <div className="w-[230px] h-[290px] bg-white p-6 shadow-2xl rounded-lg relative overflow-hidden group">
                <div className="absolute inset-0">
                  <Image
                    src="/images/école.jpg"
                    alt="Protection"
                    fill
                    className="transition-transform duration-500 group-hover:scale-105 object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-700 to-transparent opacity-70"></div>
                <div className="absolute -right-12 -top-12 w-36 h-36 bg-[#ff6200] opacity-10 rounded-full group-hover:opacity-20 transition"></div>
              </div>

              {/* Carte 3 */}
              <div className="w-[230px] h-[290px] bg-white p-6 shadow-2xl rounded-lg relative overflow-hidden group">
                <div className="absolute inset-0">
                  <Image
                    src="/images/two-prof.jpg"
                    alt="Expertise"
                    fill
                    className="transition-transform duration-500 group-hover:scale-105 object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-red-700 to-transparent opacity-70"></div>
                <div className="absolute -right-12 -top-12 w-36 h-36 bg-[#0c0c1e] opacity-10 rounded-full group-hover:opacity-20 transition"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Mission */}
        <section className="py-12 sm:py-16">
          <div className="max-w-[900px] mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
              {/* Texte */}
              <div className="w-full lg:w-1/2 text-center sm:text-left">
                <h2 className="text-[#232C64] text-2xl font-extrabold mb-4 font-title">
                  Notre mission
                </h2>
                <div className="text-gray-700 text-base space-y-3">
                  <p>
                    Chez <span className="font-semibold text-[#232C64] font-title">CEFORA</span>{" "}
                    <span className="font-semibold text-[#DB3234] font-title">FORMATION</span>, nous façonnons l&apos;avenir
                    de nos apprenants grâce à des formations pratiques, innovantes et tournées vers l&apos;emploi.
                  </p>
                  <p>
                    Nos parcours vous rendent autonomes, compétitifs et prêts à réussir,
                    ici comme à l&apos;international. Commencez à Cotonou, progressez en Afrique
                    et en Europe grâce à nos partenariats.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[350px] lg:h-[400px] flex justify-center lg:justify-end">
                <Image
                  src="/images/centre.png" 
                  alt="Notre mission"
                  fill
                  className="rounded-xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;