import Image from "next/image"
import Socios from "../../../public/luirdaniel.jpeg"
import Logo from "../../../public/logolaranja.jpeg"
import Retro from "../../../public/retro5.jpeg"

export default function Sobre() {
    return (
      <section className="bg-gray-200 py-16">
        <div className="container px-4 mx-auto">
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  
            <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
  
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                <Image
                  src={Socios}
                  alt="Sócios Base Forte Engenharia e Terraplanagem"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw" 
                  quality={100}
                  className="object-cover hover:scale-110 duration-300"
                  priority
                />
                
              </div>
              

              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden mt-8">
                <Image
                src={Retro}
                alt="Retroescavadeira Case"
                fill
                sizes="(max-width: 768px) 100vw, 50vw" 
                quality={100}
                className="object-cover hover:scale-110 duration-300"/>
                <div className="absolute w-40 h-40 right-4 bottom-1 border-4 overflow-hidden rounded-lg border-white">
                <Image
                  src={Logo}
                  alt="Logo Base Forte Engenharia e Terraplanagem"
                  fill
                  quality={100}
                  priority
                />
              </div>
              </div>
  
            </div>
  
            <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
              <h2 className="text-3xl font-bold text-black">Nossa História</h2>
  
              <p className="text-lg leading-relaxed text-black">
                            Fundada em <strong>2001</strong> por <strong>Luir Ferreira</strong>, a 
                            <span className="text-[#FCA311] font-semibold"> Base Forte Engenharia & Terraplanagem </span> 
                            nasceu com o compromisso de oferecer serviços de qualidade, pautados na 
                            <span className="font-semibold"> honestidade e confiança</span>. 
                            Com esforço e dedicação, a empresa foi crescendo e conquistando seu espaço no mercado.
                        </p>
                        <p className="text-lg leading-relaxed mt-4 text-black">
                            Em <strong>2007</strong>, <strong>Daniel Ferreira</strong> tornou-se sócio e, 
                            junto com Luir, fortaleceu a empresa, expandindo os serviços e consolidando sua 
                            reputação no setor. Hoje, a Base Forte é referência, destacando-se pela excelência 
                            e compromisso com seus clientes.
                        </p>
                        
                            <div>
                                <h3 className="text-2xl font-semibold text-[#FCA311] mb-4">Missão</h3>
                                <p className="text-lg leading-relaxed mt-4 text-black">
                                Nossa missão é <strong>fornecer soluções inovadoras e de alta qualidade</strong> no setor de engenharia civil, com foco em <strong>atender as necessidades dos nossos clientes</strong> de forma eficiente, segura e dentro dos prazos estabelecidos. Comprometemo-nos a entregar projetos que não só atendem aos requisitos técnicos, mas que também promovem <strong>valores de honestidade e transparência</strong> garantindo a <strong>segurança de todos os envolvidos</strong> e a<strong> satisfação total dos clientes.</strong> </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-[#FCA311] mb-4">Visão</h3>
                                <p className="text-lg leading-relaxed mt-4 text-black">
                                Ser reconhecida como <strong>líder no setor de engenharia civil</strong>, destacando-se pela <strong>excelência nos serviços, inovação constante</strong> e <strong>respeito aos mais altos padrões de segurança e ética</strong>. Queremos ser a primeira escolha dos nossos clientes, consolidando uma imagem de <strong>confiança, qualidade e compromisso</strong>, além de ser referência no mercado por <strong>construir um futuro sustentável e seguro</strong> para as próximas gerações.
                                </p>
                            </div>
                            <div>
                        <h3 className="text-2xl font-semibold text-[#FCA311] mb-4">
                            Nossos Valores
                        </h3>
                        <ul className="space-y-3 text-black">
                            <li className="flex items-center gap-2">
                                <span className="text-[#FCA311] text-xl">✔</span> 
                                <span className="text-lg"> <strong>Honestidade</strong> – Transparência e ética em todas as relações.</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#FCA311] text-xl">✔</span> 
                                <span className="text-lg"> <strong>Compromisso</strong> – Cumprimento de prazos e qualidade garantida.</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#FCA311] text-xl">✔</span> 
                                <span className="text-lg"> <strong>Inovação</strong> – Soluções modernas para os melhores resultados.</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#FCA311] text-xl">✔</span> 
                                <span className="text-lg"> <strong>Segurança</strong> – Prioridade na proteção de colaboradores e clientes.</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#FCA311] text-xl">✔</span> 
                                <span className="text-lg"> <strong>Satisfação do Cliente</strong> – Superamos expectativas e criamos parcerias.</span>
                            </li>
                        </ul>
                    </div>
          
            </div>
          </div>
        </div>
      </section>
    )
  }