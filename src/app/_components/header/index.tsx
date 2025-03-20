import Image from 'next/image'
import Logo from '../../../../public/logolaranja.jpeg'

export function Header() {
    return (
        <header className="flex px-4 py-4 bg-[#FCA412] text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
                {/* Logo e Nome da Empresa */}
                <div className="flex items-center gap-4">
                    <Image 
                        src={Logo} 
                        alt="Logo Base Forte" 
                        width={50}  // Defina um tamanho adequado
                        height={50} 
                        className="object-contain"
                    />
                    <span className="text-lg font-semibold">Base Forte Engenharia & Terraplanagem</span>
                </div>

                {/* Navegação */}
                <nav>
                    <ul className="flex items-center justify-center gap-4">
                        <a href="#">Sobre Nós</a>
                        <a href="#">Serviços</a>                        
                        <a href="#">Contato</a>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
