"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Ícones para abrir/fechar o menu
import Logo from "../../../../public/logolaranja.jpeg";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-[#FCA412] text-[#1D282E] p-4 fixed top-0 left-0 w-full z-50 shadow-md opacity-85">
            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
                <Link href="/">
                    <div className="flex items-center gap-4 cursor-pointer">
                        <Image
                            src={Logo}
                            alt="Logo Base Forte"
                            width={40}
                            height={40}
                            priority
                            className="object-contain"
                        />
                        <p className="text-lg font-bold hidden md:block">Base Forte Engenharia</p>
                    </div>
                </Link>

                {/* Ícone do menu no mobile */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Menu para telas maiores */}
                <nav className="hidden md:flex">
                    <ul className="flex items-center gap-6">
                        <Link href="/Sobre"><p className="text-lg">Sobre Nós</p></Link>
                        <Link href="/Servicos"><p className="text-lg">Serviços</p></Link>
                        <Link href="/Contato"><p className="text-lg">Contato</p></Link>
                    </ul>
                </nav>
            </div>

            {/* Menu mobile (abre quando o estado menuOpen for true) */}
            {menuOpen && (
                <nav className="md:hidden absolute top-full left-0 w-full bg-[#FCA412] shadow-md">
                    <ul className="flex flex-col items-center gap-4 p-4">
                        <Link href="/Sobre"><p className="text-lg" onClick={() => setMenuOpen(false)}>Sobre Nós</p></Link>
                        <Link href="/Servicos"><p className="text-lg" onClick={() => setMenuOpen(false)}>Serviços</p></Link>
                        <Link href="/Contato"><p className="text-lg" onClick={() => setMenuOpen(false)}>Contato</p></Link>
                    </ul>
                </nav>
            )}
        </header>
    );
}
