import Image from "next/image";

export default function Testimonials() {
  return (
    <main className="bg-white text-black">
      {/* Section Header */}
      <section className="bg-[#232C64] text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ce que nos Étudiants<br /> disent à propos de <span className="text-yellow-400">CEFORA FORMATION</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Découvrez les témoignages et enseignements de nos meilleurs étudiants qui ont réussi dans leurs études en génie logiciel.
        </p>
      </section>

      {/* Première section témoignages*/}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-8">
          Meilleur diplômé en génie logiciel
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Ray Newton"
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 768px) 128px, 128px"
              />
            </div>
            <h4 className="font-bold text-lg">Michel</h4>
            <p className="text-sm text-gray-600">&ldquo;Un endroit intéressant pour étudier&rdquo;</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src="https://randomuser.me/api/portraits/men/44.jpg"
                alt="Norman Cobb"
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 768px) 128px, 128px"
              />
            </div>
            <h4 className="font-bold text-lg">Komlan</h4>
            <p className="text-sm text-gray-600">
              &ldquo;Cefora rend l&apos;apprentissage passionnant et pratique.&rdquo;
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src="https://randomuser.me/api/portraits/men/50.jpg"
                alt="Norman Cobb"
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 768px) 128px, 128px"
              />
            </div>
            <h4 className="font-bold text-lg">Christian</h4>
            <p className="text-sm text-gray-600">
              &ldquo;Cefora m&apos;a confié d&apos;excellents projets de stage.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Deuxième section témoignages */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-8">
          Meilleur diplômé en génie logiciel
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src="https://randomuser.me/api/portraits/men/60.jpg"
                alt="Ray Newton"
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 768px) 128px, 128px"
              />
            </div>
            <h4 className="font-bold text-lg">Bidene</h4>
            <p className="text-sm text-gray-600">&ldquo;Un endroit formidable pour apprendre.&rdquo;</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src="https://randomuser.me/api/portraits/men/70.jpg"
                alt="Norman Cobb"
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 768px) 128px, 128px"
              />
            </div>
            <h4 className="font-bold text-lg">Chivas</h4>
            <p className="text-sm text-gray-600">
              &ldquo;Cefora met à disposition des projets innovants et exceptionnels.&rdquo;
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Norman Cobb"
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 768px) 128px, 128px"
              />
            </div>
            <h4 className="font-bold text-lg">Rodrigue</h4>
            <p className="text-sm text-gray-600">
              &ldquo;Cefora rend chaque étude exceptionnelle et mémorable.&rdquo;  
            </p>
          </div>
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-center text-black">
        <h3 className="text-2xl font-semibold mb-6">
          Rejoignez-nous pour réussir ensemble
        </h3>
        <button className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition">
          Commencer
        </button>
      </section>
    </main>
  );
}