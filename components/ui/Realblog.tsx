import Image from 'next/image';
import Link from 'next/link';

const Realblog = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Titre principal */}
        <h2 className="text-3xl font-bold text-center mb-4 font-title">Nos nouvelles filières</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Carte 1 - Soudure */}
          <div className="relative h-80 rounded-xl overflow-hidden group">
            <Image
              src="/images/soudure.jpg"
              alt="Formation soudure"
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Overlay semi-transparent permanent */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
              <h3 className="font-title text-white text-xl font-bold mb-2 drop-shadow-lg">Soudure Industrielle</h3>
              <p className="text-gray-200 text-sm mb-4 drop-shadow-md">
                Formation complète en techniques de soudage avec certification reconnue
              </p>
              <Link href="/filieres/industrie-et-artisanat" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors self-start">
                Découvrir la filière
              </Link>
            </div>
          </div>

          {/* Carte 2 - Restauration */}
          <div className="relative h-80 rounded-xl overflow-hidden group">
            <Image
              src="/images/cuisne.jpg"
              alt="Formation restauration"
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
              <h3 className="font-title text-white text-xl font-bold mb-2 drop-shadow-lg">Restauration</h3>
              <p className="text-gray-200 text-sm mb-4 drop-shadow-md">
                Devenez chef professionnel avec notre programme intensif
              </p>
              <Link href="/filieres/hotellerie-et-restauration" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors self-start">
                Découvrir la filière
              </Link>
            </div>
          </div>

          {/* Carte 3 - Mode et Beauté */}
          <div className="relative h-80 rounded-xl overflow-hidden group">
            <Image
              src="/images/coiffure.jpg"
              alt="Formation coiffure et beauté"
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
              <h3 className="font-title text-white text-xl font-bold mb-2 drop-shadow-lg">Mode et Beauté</h3>
              <p className="text-gray-200 text-sm mb-4 drop-shadow-md">
                Développez des compétences clés : créativité, sens des tendances, culture mode et rigueur technique.
              </p>
              <Link href="/filieres/mode-et-beaute" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors self-start">
                Découvrir la filière
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Realblog;