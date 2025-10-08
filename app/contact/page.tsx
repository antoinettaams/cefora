"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [role, setRole] = useState("Directeur");

  return (
    <div className="relative bg-[#0B0D21] min-h-screen flex items-center justify-center overflow-hidden">
      {/* Quadrillage de fond */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-5 pointer-events-none z-0">
        {Array.from({ length: 30 }).map((_, i) => {
          const isLastCol = (i + 1) % 6 === 0;
          const isLastRow = i >= 24;
          return (
            <div
              key={i}
              className={`border-r border-b border-[#202337] ${
                isLastCol ? "border-r-0" : ""
              } ${isLastRow ? "border-b-0" : ""}`}
            />
          );
        })}
      </div>

      {/* Contenu principal de la page */}
      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 px-4 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Colonne gauche (Image et Texte) */}
        <div className="flex-1 w-full max-w-lg text-center lg:text-left">
          {/* Lien de retour en haut */}
          <div className="mb-6 md:mb-10 lg:mb-20">
            <Link 
              href="/" 
              className="inline-flex items-center text-white hover:text-yellow-400 transition-colors text-sm md:text-base"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 md:h-5 md:w-5 mr-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Retour à la page d&apos;accueil
            </Link>
          </div>

          <div className="relative inline-block w-full flex justify-center lg:justify-start">
            {/* Élément jaune derrière */}
            <div className="absolute -z-10 w-[280px] h-[135px] md:w-[400px] md:h-[180px] lg:w-[450px] lg:h-[169px] bg-[#FED136] rounded-xl top-16 md:top-20 lg:top-25 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0" />
            
            {/* Conteneur principal pour l&apos;image + étoiles */}
            <div className="relative w-[300px] h-[300px] mx-auto">
              
              {/* Image recadrée (garder exactement la même disposition) */}
              <div className="w-[220px] h-[200px] md:w-[280px] md:h-[260px] lg:w-[300px] lg:h-[270px] overflow-hidden rounded-xl relative mx-auto">
                <Image
                  src="/images/contact.png"
                  alt="Registration"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 220px, (max-width: 1024px) 280px, 300px"
                />
              </div>

              {/* Étoiles autour de l&apos;image */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[
                  { color: "text-white", angle: 25 },
                  { color: "text-red-400", angle: 100 },
                  { color: "text-blue-400", angle: 180 },
                  { color: "text-green-400", angle: 216 },
                  { color: "text-pink-400", angle: 288 },
                ].map((star, i) => (
                  <span
                    key={i}
                    className={`${star.color} text-xl md:text-2xl`}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      // Rayon fixe pour toutes tailles d&apos;écran
                      transform: `rotate(${star.angle}deg) translate(130px) rotate(-${star.angle}deg)`,
                      transformOrigin: "center",
                    }}
                  >
                    ◆
                  </span>
                ))}
              </div>
            </div>
          </div>

          <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl leading-tight mt-6 md:mt-8">
            Rejoindre CEFORA <br className="hidden md:block" /> FORMATION
          </h1>
          <p className="text-gray-400 max-w-md mt-2 mx-auto lg:mx-0 text-sm md:text-base">
            Cefora se distingue comme une école de référence, offrant un encadrement de qualité.
          </p>
        </div>

        {/* Colonne droite (Formulaire) */}
        <div className="flex-1 w-full max-w-md bg-transparent mt-8 md:mt-12 lg:mt-15 space-y-4 md:space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
          />

          {/* Rôles à sélectionner */}
          <div>
            <p className="text-white mt-6 md:mt-8 lg:mt-15 text-sm md:text-base">Sélectionne un rôle</p>
            <div className="mt-4 md:mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {["Directeur", "Censeur", "Sécrétaire", "Enseignant"].map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`px-3 py-2 md:px-4 md:py-3 rounded-md font-medium border transition flex items-center justify-start space-x-2 text-sm md:text-base ${
                    role === r
                      ? "bg-yellow-400 text-black border-yellow-400"
                      : "bg-transparent border-gray-600 text-white hover:border-yellow-400"
                  }`}
                >
                  {/* Cercle avec bordure de démarcation */}
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                    role === r 
                      ? "border-2 border-black" 
                      : "border-2 border-gray-500 bg-transparent"
                  }`}>
                    {role === r && (
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    )}
                  </div>
                  <span>Rôle: {r}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Bouton "Apply" */}
          <button className="w-full md:w-[120px] h-12 mt-4 md:mt-6 rounded-full font-bold text-white bg-gradient-to-r from-yellow-500 to-orange-500 hover:opacity-90 transition text-sm md:text-base">
            Envoyez
          </button>
        </div>
      </div>
    </div>
  );
}