"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importação das imagens (substitua pelos seus arquivos)
import cliente1 from "../../../public/cliente1.png"
import cliente2 from "../../../public/cliente2.png"
import cliente3 from "../../../public/cliente3.webp"
import cliente4 from "../../../public/cliente4.jpg"
import cliente5 from "../../../public/cliente5.png"
import cliente6 from "../../../public/cliente6.jpg"
import cliente7 from "../../../public/cliente7.webp"
import cliente8 from "../../../public/cliente8.png"
import cliente9 from "../../../public/cliente9.jpg"
import cliente10 from "../../../public/cliente10.jpeg"
import cliente11 from "../../../public/cliente11.jpg"
import cliente12 from "../../../public/cliente12.jpeg"
import cliente13 from "../../../public/cliente13.jpeg"
import cliente14 from "../../../public/cliente14.jpeg"
import cliente15 from "../../../public/cliente15.jpeg"
import cliente16 from "../../../public/cliente16.png"
import cliente17 from "../../../public/cliente17.jpeg"

export function Clients() {
    const clients = [
        { name: "Argo Construtora", image: cliente1 },
        { name: "Engevil", image: cliente2 },
        { name: "Galwan", image: cliente3 },
        { name: "ICA construtora", image: cliente4 },
        { name: "Patrus Transporte", image: cliente5 },
        { name: "TechnipFMC", image: cliente6 },
        { name: "Grand Construtora", image: cliente7 },
        { name: "HCX Construtora", image: cliente8 },
        { name: "Frigorífico Kajory", image: cliente9 },
        { name: "Oiltanking", image: cliente10 },
        { name: "Kemi Engenharia", image: cliente11 },
        { name: "Vila Velha Terminais", image: cliente12 },
        { name: "Tai Motors", image: cliente13 },
        { name: "Santos Mota Engenhraria", image: cliente14 },
        { name: "Tubo Mills", image: cliente15 },
        { name: "Concrevit", image: cliente16 },
        { name: "Grupo Vessa", image: cliente17 },
    ];

    return (
        <section className="bg-[#1D282E] text-white py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#FCA311] mb-8">
                    Nossos Clientes
                </h2>
                
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    navigation
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="w-full"
                >
                    {clients.map((client, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs">
                                <div className="relative w-full h-40">
                                    <Image
                                        src={client.image}
                                        alt={client.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-md"
                                    />
                                </div>
                                <h3 className="text-[#1D282E] text-lg font-semibold mt-4">{client.name}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
