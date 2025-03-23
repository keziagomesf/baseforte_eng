import Image from 'next/image'
import Logo from '../../../../public/logolaranja.jpeg'

export function Header() {
    return (
        
            <header className="bg-[#FCA412] text-white p-4 fixed top-0 left-0 w-full z-50 shadow-md">

            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">

                <div className="flex items-center gap-4">
                    <Image 
                        src={Logo} 
                        alt="Logo Base Forte" 
                        width={50}  
                        height={50} 
                        className="object-contain"
                    />
                    <a href="#home"><span className="text-lg font-semibold">Base Forte Engenharia & Terraplanagem</span></a>
                </div>


                <nav>
                    <ul className="flex items-center justify-center gap-4">
                        <a href="#about">Sobre Nós</a>
                        <a href="#services">Serviços</a>                        
                        <a href="#contact">Contato</a>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
