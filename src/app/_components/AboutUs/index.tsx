export function About() {
    return (
        <section className="bg-[#1D282E] text-white py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                
                <h2 className="text-4xl font-bold text-[#FCA311] text-center mb-12">
                    Sobre Nós
                </h2>

                
                <div className="grid md:grid-cols-2 gap-12">
                    
                    <div>
                        <h3 className="text-2xl font-semibold text-[#FCA311] mb-4">
                            Nossa História
                        </h3>
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
                    </div>

                    {/* Nossos Valores */}
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

                {/* Equipe */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold text-[#FCA311] mb-4">
                        Nossa Equipe
                    </h3>
                    <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                        Contamos com uma equipe altamente qualificada e comprometida, liderada por 
                        <strong> Luir Ferreira</strong> e <strong>Daniel Ferreira</strong>. 
                        Cada profissional da <span className="text-[#FCA311] font-semibold">Base Forte</span> é treinado 
                        para garantir excelência nos serviços prestados, sempre com foco na qualidade 
                        e satisfação dos nossos clientes.
                    </p>
                </div>
            </div>
        </section>
    );
}
