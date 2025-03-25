import Image from "next/image";
import ProFic from "../../../public/projetofic.jpg"

export function Projects() {
    
    const projects = [
        { 
            title: "Infraestrutura para Complexo Industrial",
            description: "Execução completa de terraplanagem, drenagem e pavimentação para um novo complexo industrial de 50.000m².",
            image: ProFic
        },
        { 
            title: "Duplicação de Rodovia Estadual",
            description: "Projeto de escavação e pavimentação para a ampliação de 30 km de rodovia, melhorando a infraestrutura viária da região.",
            image: ProFic
        },
        { 
            title: "Loteamento Residencial GreenVille",
            description: "Realização de serviços de terraplanagem e drenagem para a construção de um novo bairro planejado.",
            image: ProFic
        },
        { 
            title: "Construção de Barragem de Contenção",
            description: "Obra de engenharia para contenção e controle de enchentes, garantindo segurança hídrica para comunidades próximas.",
            image: ProFic
        },
        { 
            title: "Pátio Logístico de Transporte",
            description: "Execução de pavimentação e drenagem para um terminal logístico de grande porte, otimizando o transporte de cargas.",
            image: ProFic
        },
    ];

    return (
        <section className="bg-gray-200 text-white py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Título */}
                <h2 className="text-4xl font-bold text-[#FCA311] text-center mb-12">
                    Projetos Realizados
                </h2>

                {/* Grid de projetos */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white text-[#1D282E] rounded-lg shadow-lg overflow-hidden">
                            {/* Imagem usando Next.js */}
                            <div className="relative w-full h-40">
                                <Image 
                                    src={project.image} 
                                    alt={project.title} 
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    style={{ objectFit: "cover" }} 
                                    priority
                                />
                            </div>

                            {/* Conteúdo */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#FCA311]">{project.title}</h3>
                                <p className="text-lg mt-2">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
