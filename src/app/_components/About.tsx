import Image from "next/image"
import Link from "next/link"
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
                  sizes="(max-width: 768px) 100vw, 50vw" 
                  quality={100}
                  className="object-cover hover:scale-110 duration-300"
                  rel="preload"
                  priority={true}
                />
              </div>
  
              <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                <Image
                  src={Logo}
                  alt="Logo Base Forte Engenharia e Terraplanagem"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw" 
                  quality={100}
                  priority
                />
              </div>
  
            </div>
  
            <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
              <h2 className="text-4xl font-bold text-black">Sobre Nós</h2>
  
             
                <p className="text-lg leading-relaxed text-black">
                   <span className="text-[#FCA311] font-semibold">Base Forte Engenharia e Terraplanagem</span> é liderada por <strong>Luir Ferreira e Daniel Ferreira</strong>, profissionais com mais de <strong>20 anos de experiência</strong> no mercado da engenharia civil. Com uma trajetória marcada por conquistas e reconhecimento, a empresa se destaca pelo compromisso com a <strong>inovação e o empreendedorismo</strong>, sempre buscando excelência em cada projeto realizado.
                   </p>
              

            
                <p className="text-lg leading-relaxed text-black">
                   Nossos pilares são <strong>honestidade, compromisso e satisfação do cliente</strong>, valores que nos consolidam como referência no setor. Construímos com qualidade e confiança, transformando desafios em grandes realizações.</p>
 

             <Link href="/Sobre">
             <button className="px-6 py-3 bg-[#FCA311] font-semibold rounded-lg hover:bg-[#fca2119a] transition duration-300 text-[#1D282E]">Saiba Mais</button>
             </Link>          
          
            </div>
          </div>
        </div>
      </section>
    )
  }