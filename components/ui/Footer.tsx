"use client";

import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#232C64] text-white pt-16 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Bloc 1 : Logo, nom, description, réseaux */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            {/* Logo responsive */}
                            <div className="relative w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden flex-shrink-0">
                                <Image
                                    src="/images/images.jpeg"
                                    alt="Logo CEFORA FORMATION"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 640px) 40px, (max-width: 768px) 40px, (max-width: 1024px) 48px, 56px"
                                />
                            </div>

                            {/* Titre */}
                            <span className="text-white font-title text-base sm:text-lg md:text-sm lg:text-xl font-bold">
                                CEFORA FORMATION
                            </span>
                        </Link>

                        <p className="text-white leading-relaxed text-base md:text-lg">
                            Une institution moderne dédiée à l&apos;excellence
                            académique et à l&apos;innovation.
                        </p>

                        <div className="flex space-x-4 text-xl md:text-2xl text-white">
                            <a
                                href="#"
                                className="hover:text-yellow-400 transition-colors"
                                aria-label="Notre page Facebook"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="#"
                                className="hover:text-yellow-400 transition-colors"
                                aria-label="Notre compte Twitter"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="#"
                                className="hover:text-yellow-400 transition-colors"
                                aria-label="Notre profil LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="#"
                                className="hover:text-yellow-400 transition-colors"
                                aria-label="Notre compte Instagram"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Bloc 2 : Navigation */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold font-title">
                            Navigation
                        </h3>
                        <ul className="space-y-3 text-white text-base md:text-lg">
                            <li>
                                <Link
                                    href="/filieres"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Filières
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    À propos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/testimonials"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Témoignages
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Bloc 3 : Filières */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold font-title">
                            Filières
                        </h3>
                        <ul className="space-y-3 text-white text-base md:text-lg">
                            <li>
                                <Link
                                    href="/filieres/developpement-web"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Développement Web
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/filieres/hotellerie-et-restauration"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Hôtellerie et Restauration
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/filieres/mode-et-beaute"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Mode et beauté
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/filieres/paramedical-et-social"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Paramédical et social
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/filieres/batiment"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Bâtiment
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Bloc 4 : Company */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold font-title">
                            Company
                        </h3>
                        <ul className="space-y-3 text-white text-base md:text-lg">
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Évènements
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Confidentialité
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Forum d&apos;aide
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Assistance
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-[#FED136] text-center text-gray-400 text-sm">
                <p>
                    © {new Date().getFullYear()} CEFORA Formation. Tous droits
                    réservés.
                </p>
            </div>
        </footer>
    );
}