"use client"

import { useState } from "react";
import Image from 'next/image'
import Link from "next/link"
import Logo from '../../../../public/logolaranja.jpeg'

export function Header() {
     const [formData, setFormData] = useState({
            name: "",
            email: "",
            phone: "",
            message: "",
        });
    
    const sendWhatsAppMessage = () => {
        const { name, email, phone, message } = formData;
        const whatsappMessage = `Olá, gostaria de saber mais sobre os serviços de engenharia e terraplanagem`;
        const whatsappURL = `https://wa.me/5527998495740?text=${whatsappMessage}`; 
        window.open(whatsappURL, "_blank");
    };
    return (
        
            <header className="bg-[#FCA412] text-[#1D282E] p-4 fixed top-0 left-0 w-full z-50 shadow-md opacity-85">

            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">

                <Link href="/">
                    <div className="flex items-center gap-4 cursor-pointer">
                        <Image
                            src={Logo}
                            alt="Logo Base Forte"
                            width={50}
                            height={50}
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain"
                        />
                        <p className="text-lg font-bold">Base Forte Engenharia & Terraplanagem</p>
                    </div>
                </Link>

                <nav>
                    <ul className="flex items-center justify-center gap-4">
                        <Link href="/Sobre">
                            <p className="text-lg">Sobre Nós</p>
                        </Link>
                        <Link href="/Servicos">
                            <p className="text-lg">Serviços</p>
                        </Link>                        
                        
                        <Link href="/Contato">
                            <p className="text-lg">Contato</p>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
