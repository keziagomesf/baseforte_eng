"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Retro4 from "../../../public/retro4.jpeg";
import Demolicao from "../../../public/demolicao2.jpeg";
import Escavacao from "../../../public/escavacao.jpeg";
import Abert from "../../../public/retroescavadeira_terrap.jpg";
import Pav from "../../../public/retroescavadeira_dren.jpg";
import Funda from "../../../public/fundacao.jpeg";
import Conten from "../../../public/projetofic.jpg";
import Niv from "../../../public/fundacao2.jpeg";

export function Services() {
  const services = [
    { 
      title: "Escavação e aterro", 
      description: "Realizamos a escavação de terrenos para diferentes tipos de obras, garantindo a remoção precisa do solo.", 
      image: Escavacao
    },
    { 
      title: "Demolição", 
      description: "Executamos demolições controladas de estruturas, garantindo um processo seguro e eficiente.", 
      image: Demolicao
    },
    { 
      title: "Limpeza de Terreno", 
      description: "Removemos entulhos, vegetação e detritos para preparar o solo para construções e projetos.", 
      image: Retro4
    },
    { 
      title: "Abertura de Estradas", 
      description: "Criamos acessos seguros e duráveis, removendo obstáculos e nivelando o solo.", 
      image: Abert
    },
    { 
      title: "Drenagem", 
      description: "Evitamos alagamentos e erosões com sistemas eficientes de drenagem.", 
      image: Escavacao
    },
    { 
      title: "Pavimentação", 
      description: "Oferecemos serviços de asfaltamento e pavimentação garantindo resistência e durabilidade.", 
      image: Pav
    },
    { 
      title: "Fundação de Prédios", 
      description: "Realizamos escavações e fundações seguras para edifícios.", 
      image: Funda
    },
    { 
      title: "Obra de contenção", 
      description: "Construímos muros de arrimo e contenções para evitar deslizamentos de terra.", 
      image: Conten
    },
    { 
      title: "Nivelamento de Pátios", 
      description: "Preparamos terrenos garantindo superfícies niveladas e seguras.", 
      image: Niv
    },
  ];

  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperInstance) {
      
      }
    }, 20000);

    return () => clearInterval(interval);
  }, [swiperInstance]);

  return (
    <section className="bg-[#1D282E] text-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FCA311] text-center mb-12">
          Nossos Serviços
        </h2>

        <Swiper
          spaceBetween={15} // Menos espaço entre slides no mobile
          loop={true}
          autoplay={{
            delay: 8000, // 8 segundos para melhor leitura no mobile
            disableOnInteraction: false,
          }}
          navigation={true}
          breakpoints={{
            320: { slidesPerView: 1, }, // 1 slide no mobile
            640: { slidesPerView: 2, spaceBetween: 20 }, // 2 slides no tablet
            1024: { slidesPerView: 3, spaceBetween: 30 }, // 3 no desktop
          }}
          modules={[Navigation, Autoplay]}
          className="pb-16"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-[#1D282E] rounded-lg shadow-lg overflow-hidden min-h-[350px] md:min-h-[450px] flex flex-col">
                <div className="relative w-full h-[180px] md:h-[250px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    className="rounded-t-lg"
                    priority
                  />
                </div>
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold text-[#FCA311]">{service.title}</h3>
                  <p className="text-sm md:text-lg mt-2 line-clamp-3">{service.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
