"use client"

import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contato() {

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return(
        <footer className="bg-[#1D282E] text-white py-50 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold text-[#FCA311] ">Entre em contato com a nossa equipe através do formulário ao lado:</h2>
                    <h3 className="text-[#FCA311] text-2xl font-semibold mt-4 mb-10">Ou utilize um dos canais abaixo:</h3>
                    <div className="flex space-x-6">

                        <Link href="https://www.instagram.com/baseforte.eng/" target="_blank">
                            <FaInstagram className="text-3xl hover:text-[#FCA311] transition cursor-pointer mt-2" />
                        </Link>
                        
                        <Link href="https://www.linkedin.com/company/base-forte-engenharia-e-terraplanagem/" target="_blank">
                            <FaLinkedin className="text-3xl hover:text-[#FCA311] transition cursor-pointer mt-2" />
                        </Link>
                        <button
                            type="button"
                            onClick={sendWhatsAppMessage}
                            className="text-3xl hover:text-[#FCA311] transition cursor-pointer"
                        >
                        <FaWhatsapp className="inline" />
                        </button>
                    </div>
                    
                </div>
                <div>
                <form className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nome"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Telefone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
                        />
                        <textarea
                            name="message"
                            placeholder="Mensagem"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
                        />
                        <button
                    type="button"
                    onClick={() => window.location.href = `mailto:adm@baseforteterraplanagem.com?subject=Contato&body=${formData.message}`}
                    className="w-full bg-[#FCA311] text-[#1D282E] font-bold py-3 rounded-lg hover:bg-[#e58b00] transition"
                    >
                    Enviar E-mail
                            </button>
                        
                    </form> 
                </div>
            </div>
        </footer>
    )
}