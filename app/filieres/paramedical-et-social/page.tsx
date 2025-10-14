"use client";
import React from "react";
import Image from "next/image";
import { BsCheck } from "react-icons/bs";
import { FaRegClock } from 'react-icons/fa';

export default function Hero() {
  // Données de la section planning
  const scheduleData = [
    { day: '15', month: 'Septembre', year: '2025-2026', time: '8H:00 – 17H:00', action: 'Inscription' },
    { day: '02', month: 'Octobre', year: '2025-2026', time: '8H:00 – 17H:00', action: 'Pré-rentrée' },
    { day: '06', month: 'Octobre', year: '2025-2026', time: '8H:00 – 17H:00', action: 'Rentrée' },
  ];

  return (
    <>
      {/* SECTION HERO */}
      <section className="relative w-full min-h-[calc(80vh-80px)] bg-[#232C64] overflow-hidden pt-16 pb-8 md:pt-20 md:pb-20">
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-5 z-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className={`border-r border-b border-[#202337] 
                ${(i + 1) % 6 === 0 ? "border-r-0" : ""}
                ${i >= 24 ? "border-b-0" : ""}`}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-10">
          {/* Texte, description */}
          <div className="text-white w-full md:w-1/2 max-w-2xl text-center md:text-left px-2 sm:px-0">
            <h1 className="font-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-tight">
              Paramédical & Social
            </h1>
            <p className="text-base md:text-lg text-gray-300 mt-3 md:mt-4 max-w-md mx-auto md:mx-0">
              Formez-vous aux métiers de la santé, du paramédical et de l’accompagnement social pour faire la différence dans votre communauté.
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 relative h-[220px] sm:h-[260px] md:h-[300px] lg:h-[400px] xl:h-[380px]">
            <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-[180px] h-[90px] sm:w-[220px] sm:h-[110px] md:w-[260px] md:h-[130px] lg:w-[300px] lg:h-[150px] xl:w-[320px] xl:h-[160px] rounded-b-full z-0 bg-gradient-to-b from-yellow-600 to-yellow-100" />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className=" relative w-[165px] h-[165px] sm:w-[240px] sm:h-[240px] md:w-[245px] md:h-[245px] lg:w-[310px] lg:h-[340px] xl:w-[320px] xl:h-[320px] max-w-md mx-auto overflow-hidden rounded-b-[50%]">
                  <Image
                    src="/images/abouthero.png"
                    alt="Industrie et Artisanat"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center 60%",
                    }}
                    className="transition-transform duration-500 hover:scale-105"
                    priority
                  />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION COMPÉTENCES */}
      <section className="bg-white py-20 text-center overflow-x-hidden">
        <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
          Compétences que vous développerez
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-12">
          Acquérir des compétences en soins paramédicaux, assistance sociale, communication et intervention communautaire pour exceller dans le secteur de la santé et du social.
        </p>

        <div className="flex flex-col items-center gap-6 scale-[0.8] sm:scale-[0.9] md:scale-100 transition-transform duration-300">
          <div className="flex justify-center gap-6">
            {[
              { color: "#FDBA21", text: "Auxiliaire de pharmacie", textColor: "#0F172A" },
              { color: "#F43F3E", text: "Délégué Médical", textColor: "#fff" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 px-6 py-3 rounded-full font-medium whitespace-nowrap shadow-sm"
                   style={{ backgroundColor: item.color, color: item.textColor }}>
                <span className="w-2 h-2 bg-white rounded-full"></span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION FILIÈRE */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 max-w-7xl mx-auto">
        <div className="md:w-1/2 w-full space-y-5 md:space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] leading-tight">
            Découvrez la filière <br />
            <span className="text-[#0F172A]">Auxiliaire de pharmacie</span>
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-md mx-auto md:mx-0 text-base md:text-lg">
            Apprenez à assister les pharmacies dans la gestion des stocks, l'accueil et le conseil client.
          </p>

          <div className="grid grid-cols-2 gap-y-4 gap-x-6 justify-items-start md:justify-items-start mt-8 max-w-sm mx-auto md:mx-0">
            {[
              { label: "Durée : 6 mois" },
              { label: "Prix : 200 000 F CFA" },
              { label: "Certificat inclus" },
              { label: "Stages pratiques" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-[#0F172A]">
                <div className="w-5 h-5 flex items-center justify-center bg-[#DB3234] rotate-45 relative flex-shrink-0">
                  <div className="rotate-[-45deg] text-white text-xs">
                    <BsCheck />
                  </div>
                </div>
                <span className="font-medium text-sm sm:text-base">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
          <div className="absolute w-[280px] sm:w-[350px] md:w-[400px] h-[280px] sm:h-[350px] md:h-[400px] bg-transparent border-[3px] border-yellow-100 rounded-full z-0"></div>
          <div className="relative w-[280px] sm:w-[320px] md:w-[350px] h-[180px] sm:h-[220px] md:h-[250px] rounded-xl overflow-hidden shadow-xl z-10">
            <Image
              src="/images/auxilliaire.jpg"
              alt="Paramédical & Social"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION PLANNING DES COURS */}
      <section className="-ml-13 bg-white p-8 md:p-16 lg:p-20 font-sans text-gray-800">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-12 text-center md:text-left">
          Planning des cours
        </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {scheduleData.map((item, index) => (
            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-6">
                <p className="text-5xl md:text-6xl font-bold inline-block mr-2 text-gray-900">
                  {item.day}
                </p>
                <p className="text-base font-medium inline-block align-top mt-2">
                  {item.month}
                  <br />
                  {item.year}
                </p>
                <div className="flex items-center justify-center md:justify-start mt-3 text-sm text-gray-600">
                  <FaRegClock className="mr-2 text-yellow-600 text-base" />
                  {item.time}
                </div>
              </div>
              <div className="border-t border-gray-300 w-full mb-6 max-w-xs md:max-w-none"></div>
              <p className="text-xl font-semibold mt-4">{item.action}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
