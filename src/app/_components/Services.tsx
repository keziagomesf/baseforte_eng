import Image from 'next/image'
import Retro4 from "../../../public/retro4.jpeg"
import Demolicao from "../../../public/demolicao2.jpeg"
import Escavacao from "../../../public/escavacao.jpeg"
import Abert from "../../../public/retroescavadeira_terrap.jpg"
import Pav from "../../../public/retroescavadeira_dren.jpg"
import Funda from "../../../public/fundacao.jpeg"
import Conten from "../../../public/projetofic.jpg"
import Niv from "../../../public/fundacao2.jpeg"

export function Services() {
    // Lista de serviços
    const services = [
        { 
            title: "Escavação e aterro", 
            description: "Realizamos a escavação de terrenos para diferentes tipos de obras, garantindo a remoção precisa do solo. O aterro é feito com compactação adequada, proporcionando segurança e estabilidade para futuras construções.", 
            image: Escavacao
        },
        { 
            title: "Demolição", 
            description: "Executamos demolições controladas de estruturas, garantindo um processo seguro e eficiente, minimizando impactos ambientais e otimizando a remoção de entulhos.", 
            image: Demolicao
        },
        { 
            title: "Limpeza de Terreno", 
            description: "Removemos entulhos, vegetação e detritos para preparar o solo para construções e projetos, garantindo um ambiente limpo e seguro para o início das obras.", 
            image: Retro4
        },
        { 
            title: "Abertura de Estradas", 
            description: "Criamos acessos seguros e duráveis, removendo obstáculos, nivelando o solo e aplicando as técnicas necessárias para garantir a resistência e funcionalidade das vias.", 
            image: Abert
        },
        { 
            title: "Drenagem", 
            description: "Evitamos alagamentos e erosões com sistemas eficientes de drenagem, conduzindo corretamente a água da chuva e garantindo a estabilidade do solo.", 
            image: Escavacao
        },
        { 
            title: "Pavimentação", 
            description: "Oferecemos serviços de asfaltamento e pavimentação em concreto ou blocos intertravados, garantindo resistência, durabilidade e acabamento de qualidade para ruas, estradas e pátios industriais.", 
            image: Pav
        },
        { 
            title: "Fundação de Prédios", 
            description: "Realizamos escavações e fundações seguras para edifícios, aplicando as melhores técnicas para garantir estabilidade e segurança estrutural.", 
            image: Funda
        },
        { 
            title: "Obra de contenção", 
            description: "Construímos muros de arrimo e contenções para evitar deslizamentos de terra, garantindo a segurança de encostas e terrenos instáveis.", 
            image: Conten
        },
        { 
            title: "Nivelamento de Pátios", 
            description: "Preparamos terrenos para indústrias, comércios e residências, garantindo superfícies niveladas e seguras para a movimentação de veículos e equipamentos.", 
            image: Niv
        },
    ];

    return (
        <section className="bg-gray-200 text-white py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Título */}
                <h2 className="text-4xl font-bold text-[#FCA311] text-center mb-12">
                    Nossos Serviços
                </h2>

                {/* Grid de serviços */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white text-[#1D282E] rounded-lg shadow-lg overflow-hidden">
                            {/* Imagem */}
                            <div className="relative w-full h-40">
                                <Image 
                                src={service.image} 
                                alt={service.title} 
                                layout="fill"
                                objectFit='cover'
                                />
                            </div>

                            {/* Conteúdo */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#FCA311]">{service.title}</h3>
                                <p className="text-lg mt-2">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
