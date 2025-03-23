"use client"

import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    // Atualiza os campos do formulário
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Envio para WhatsApp
    const sendWhatsAppMessage = () => {
        const { name, email, phone, message } = formData;
        const whatsappMessage = `Olá, gostaria de saber mais sobre os serviços de engenharia e terraplanagem`;
        const whatsappURL = `https://wa.me/5527998495740?text=${whatsappMessage}`; 
        window.open(whatsappURL, "_blank");
    };

    return (
        <footer className="bg-[#1D282E] text-white py-12 px-6" id="contact">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
               
                <div>
                    <h3 className="text-2xl font-bold text-[#FCA311] mb-6">Entre em Contato</h3>
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
                            onClick={sendWhatsAppMessage}
                            className="w-full bg-[#FCA311] text-[#1D282E] font-bold py-3 rounded-lg hover:bg-[#e58b00] transition"
                        >
                            Faça seu orçamento via WhatsApp <FaWhatsapp className="inline ml-2" />
                        </button>
                    </form>
                </div>

                {/* Redes Sociais */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-2xl font-bold text-[#FCA311] mb-6">Siga-nos</h3>
                    <div className="flex space-x-6">
                        <Link href="https://www.instagram.com/baseforte.eng/" target="_blank">
                            <FaInstagram className="text-3xl hover:text-[#FCA311] transition cursor-pointer" />
                        </Link>
                        
                       
                        <Link href="https://www.linkedin.com/company/base-forte-engenharia-e-terraplanagem/" target="_blank">
                            <FaLinkedin className="text-3xl hover:text-[#FCA311] transition cursor-pointer" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-center text-sm text-gray-400 mt-10">
                © {new Date().getFullYear()} Base Forte Engenharia & Terraplanagem. Todos os direitos reservados.
            </div>
        </footer>
    );
}
