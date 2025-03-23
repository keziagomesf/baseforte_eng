import Image from "next/image"
import Socios from "../../../public/luirdaniel.jpeg"
import Logo from "../../../public/logolaranja.jpeg"

export function About() {
    return (
      <section className="bg-gray-200 py-16" id="about">
        <div className="container px-4 mx-auto">
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  
            <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
  
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                <Image
                  src={Socios}
                  alt="Sócios Base Forte Engenharia e Terraplanagem"
                  fill
                  quality={100}
                  className="object-cover hover:scale-110 duration-300"
                  priority
                />
              </div>
  
              <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                <Image
                  src={Logo}
                  alt="Logo Base Forte Engenharia e Terraplanagem"
                  fill
                  quality={100}
                  priority
                />
              </div>
  
            </div>
  
            <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
              <h2 className="text-4xl font-bold">Nossa História</h2>
  
              <p className="text-lg leading-relaxed">
                            Fundada em <strong>2001</strong> por <strong>Luir Ferreira</strong>, a 
                            <span className="text-[#FCA311] font-semibold"> Base Forte Engenharia & Terraplanagem </span> 
                            nasceu com o compromisso de oferecer serviços de qualidade, pautados na 
                            <span className="font-semibold"> honestidade e confiança</span>. 
                            Com esforço e dedicação, a empresa foi crescendo e conquistando seu espaço no mercado.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            Em <strong>2007</strong>, <strong>Daniel Ferreira</strong> tornou-se sócio e, 
                            junto com Luir, fortaleceu a empresa, expandindo os serviços e consolidando sua 
                            reputação no setor. Hoje, a Base Forte é referência, destacando-se pela excelência 
                            e compromisso com seus clientes.
                        </p>
                        <div>
                        <h3 className="text-2xl font-semibold text-[#FCA311] mb-4">
                            Nossos Valores
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <span className="text-[#FCA311] text-xl">✔</span> 
                                <span className="text-lg">Honestidade – Transparência e ética em todas as relações.</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#FCA311] text-xl">✔</span> 
                                <span className="text-lg">Compromisso – Cumprimento de prazos e qualidade garantida.</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#FCA311] text-xl">✔</span> 
                                <span className="text-lg">Inovação – Soluções modernas para os melhores resultados.</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#FCA311] text-xl">✔</span> 
                                <span className="text-lg">Segurança – Prioridade na proteção de colaboradores e clientes.</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#FCA311] text-xl">✔</span> 
                                <span className="text-lg">Satisfação do Cliente – Superamos expectativas e criamos parcerias.</span>
                            </li>
                        </ul>
                    </div>
          
            </div>
          </div>
        </div>
      </section>
    )
  }